const navigations = document.querySelectorAll('a[href*="#"]')

for (let nav of navigations) {
    nav.addEventListener("click", function(e) {
        e.preventDefault();
        const blockID = nav.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}