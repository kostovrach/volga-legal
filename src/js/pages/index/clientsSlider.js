const clientsSliderParams = {
    spaceBetween: 16,
    loop: true,
    slidesPerView: 'auto',
    pauseOnMouseEnter: true,
    waitForTransition: false,
    disableOnInteraction: false,
    freeMode: true,
    autoplay: {
      delay: 0,
      paused: false,
    },
    speed: 8000,
}

new Swiper('.clients__slider', clientsSliderParams)