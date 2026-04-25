const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__nav");
const closeBtn = document.querySelector(".header__nav-close-btn");
const navOverlay = document.querySelector(".header__nav-overlay");
const mainElement = document.querySelector(".main");

function closeMenu() {
  menu.classList.remove("header__nav--active");
  navOverlay.classList.remove("header__nav-overlay--active");
}

function openMenu() {
  menu.classList.add("header__nav--active");
  navOverlay.classList.toggle("header__nav-overlay--active");
}

// Button for opening the menu
menuBtn.addEventListener("click", () => {
  openMenu();
});

// Button for closing the menu
closeBtn.addEventListener("click", () => {
  closeMenu();
});

// Ensuring the nav closes when resizing to larger screens
window.addEventListener("resize", () => {
  if (window.innerWidth > 1440) {
    closeMenu();
  }
});

// When clicking outside the nav it closes the menu
navOverlay.addEventListener("click", () => {
  closeMenu();
});
