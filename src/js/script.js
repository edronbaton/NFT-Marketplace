window.addEventListener("DOMContentLoaded", function () {
    let hamburger = this.document.querySelector(".promo__hamburger"),
        nav = this.document.querySelector(".promo__nav"),
        close = this.document.querySelector(".promo__nav-close"),
        overlay = this.document.querySelector(".overlay")
    
    hamburger.addEventListener("click", function () {
        nav.classList.toggle("active")
        close.classList.toggle("active")
        overlay.classList.toggle("active")
    })

    close.addEventListener("click", function () {
        nav.classList.toggle("active")
        close.classList.toggle("active")
        overlay.classList.toggle("active")
    })
})
