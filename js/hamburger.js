const hamburger_menu = document.querySelector(".hamburger_menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

hamburger_menu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});