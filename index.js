const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__nav");
const closeBtn = document.querySelector(".header__nav-close-btn");
const navOverlay = document.querySelector(".header__nav-overlay");
const mainElement = document.querySelector(".main");

function closeMenu() {
  menu.classList.remove("header__nav--active");
  navOverlay.classList.remove("header__nav-overlay--active");
  // Remove focus trap listener when closed
  document.removeEventListener("keydown", trapFocus);
  menuBtn.setAttribute("aria-expanded", "false");
}

function openMenu() {
  menu.classList.add("header__nav--active");
  navOverlay.classList.toggle("header__nav-overlay--active");
  // Add focus trap listener
  document.addEventListener("keydown", trapFocus);
  menuBtn.setAttribute("aria-expanded", "true");

  // Focus the first link on opening the nav
  const firstLink = menu.querySelector(".header__list a");
  firstLink?.focus();
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

// When clicking outside the nav it closes the menu (i.e., on the div.overlay)
navOverlay.addEventListener("click", () => {
  closeMenu();
});

// Escape key closes nav menu
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

function trapFocus(e) {
  // Get all possible elements that can focus
  const focusable = menu.querySelectorAll("a, button");

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  const isShift = e.shiftKey;
  const active = document.activeElement;

  //  TAB forward: If not shift and current active element is last element
  if (!isShift && active === last) {
    e.preventDefault();
    first.focus();
  }

  // SHIFT + TAB backward:  if equal to first, shift focus to last element (i.e., loop back around)
  if (isShift && active === first) {
    e.preventDefault();
    last.focus();
  }
}
