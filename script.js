// script.js
document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta-btn");
    ctaButton.addEventListener("click", function () {
        alert("Redirecting to claim your free Wendy's sample!");
    });
});
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}