window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#burgerMenu").addEventListener("click", function () {
        document.querySelector("#menu").classList.add("is-active")
    }), document.querySelector("#closeMenu").addEventListener("click", function () {
        document.querySelector("#menu").classList.remove("is-active")
    })
});