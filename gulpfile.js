import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import terser from 'gulp-terser';
import browserSyncLib from 'browser-sync';
import { deleteAsync } from 'del';
import { fileURLToPath } from 'url';
import { dirname, basename, join } from 'path';
import fonter from 'gulp-fonter';
import fs from 'fs';
import fg from 'fast-glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { src, dest, watch, series, parallel } = gulp;
const sass = gulpSass(dartSass);
const browserSync = browserSyncLib.create();

const paths = {
  html: {
    src: 'src/pages/*.html',
    watch: ['src/pages/**/*.html', 'src/components/**/*.html', 'src/layout/**/*.html'],
    dest: 'src/',
  },
  styles: {
    src: 'src/scss/style.scss',
    watch: [
      'src/scss/**/*.scss',
      'src/components/**/*.scss',
      'src/pages/**/*.scss',
    ],
    dest: 'src/css/',
  },
  scripts: {
    src: ['node_modules/swiper/swiper-bundle.js', 'src/js/**/*.js', '!src/js/main.min.js'],
    dest: 'src/js/',
  },
  fonts: {
    src: 'src/assets/fonts/**/*',
    dest: 'src/assets/fonts',
  },
  build: {
    dest: 'build/',
    copy: [
      'src/**/*.html',
      'src/css/style.min.css',
      'src/js/main.min.js',
      'src/assets/**/*',
    ],
  }
};

// Генерация _components.scss и _pages.scss с @forward
async function generateScssIndex() {
  const targetDirs = ['src/scss/components', 'src/scss/pages'];

  await Promise.all(targetDirs.map(async (dirPath) => {
    const folderName = basename(dirPath);
    const scssFiles = await fg('**/*.scss', {
      cwd: dirPath,
      onlyFiles: true,
      ignore: [`**/_${folderName}.scss`, '**/style.scss', '**/*.min.css'],
    });

    const forwards = scssFiles
      .map(file => {
        const withoutExt = file.replace(/\.scss$/, '');
        return `@forward '${withoutExt.startsWith('_') ? withoutExt.slice(1) : withoutExt}';`;
      })
      .join('\n');

    const targetFilePath = join(dirPath, `_${folderName}.scss`);

    // Не перезаписывает, если содержимое не изменилось
    const previousContent = fs.existsSync(targetFilePath)
      ? fs.readFileSync(targetFilePath, 'utf8')
      : '';

    if (previousContent !== forwards) {
      fs.writeFileSync(targetFilePath, forwards);
      console.log(`Updated: ${targetFilePath}`);
    } else {
      // Optional: log only once or remove this in production
      console.log(`Skipped (no changes): ${targetFilePath}`);
    }
  }));
}

// Font
async function font() {
  const { default: ttf2woff2 } = await import('gulp-ttf2woff2');

  return src(paths.fonts.src)
    .pipe(fonter({ formats: ['woff', 'ttf'] }))
    .pipe(ttf2woff2())
    .pipe(dest(paths.fonts.dest));
}

// HTML
function html() {
  return src(paths.html.src)
    .pipe(fileInclude({ prefix: '@@', basepath: '@file' }))
    .pipe(dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// SCSS
function stylesTask() {
  return src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(concat('style.min.css'))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Обёртка: generate + компиляция
const styles = series(generateScssIndex, stylesTask);

// JS
function scripts() {
  return src(paths.scripts.src)
    .pipe(concat('main.min.js'))
    .pipe(terser())
    .pipe(dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// Clean build folder
function clean() {
  return deleteAsync([paths.build.dest]);
}

// Copy files to build/
function copyToBuild() {
  return src(paths.build.copy, { base: 'src' })
    .pipe(dest(paths.build.dest));
}

// Watcher
function serve() {
  browserSync.init({
    server: { baseDir: 'src/' },
    notify: false,
    open: true,
  });

  watch(paths.html.watch, html);
  watch(paths.styles.watch, series(generateScssIndex, stylesTask));
  watch(['src/js/**/*.js', '!src/js/main.min.js'], scripts);
}

// Экспортируемые задачи
export { styles, scripts, font, html, serve, generateScssIndex };
export const build = series(clean, generateScssIndex, html, styles, scripts, copyToBuild);
export default series(generateScssIndex, parallel(html, styles, scripts), serve);
