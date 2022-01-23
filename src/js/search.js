window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#searchBtn").addEventListener("click", function () {
        document.querySelector("#searchForm").classList.add("is-active")
    }), document.querySelector("#closeSearch").addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector("#searchForm").classList.remove("is-active")
    })
});