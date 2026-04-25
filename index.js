const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__nav");
const closeBtn = document.querySelector(".header__nav-close-btn"); // Add this to your HTML

menuBtn.addEventListener("click", () => {
  menu.classList.add("header__nav--active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("header__nav--active");
});
