const hamburger_menu = document.querySelector(".hamburger_menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");
const backbutton = document.getElementById("backbutton")

// Opens and closes hamburger menu

hamburger_menu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

hamburger_menu.addEventListener("click", () => {
    hamburger_menu.classList.toggle("open");
});



