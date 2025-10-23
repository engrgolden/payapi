let hideableNav = document.querySelector(".hideable-nav");
let menuClose = document.querySelector(".menu-close");
let first = document.querySelector(".first");
let navLinks = document.querySelector(".nav-links");
let ctaBook = document.querySelector(".cta-book");

document.querySelector(".menu-open").addEventListener("click", () => {
  hideableNav.classList.add("mobile-show");
  menuClose.classList.add("mobile-show");
  first.classList.add("mobile-show");
  navLinks.classList.add("mobile-show");
  ctaBook.classList.add("mobile-show");
});

document.querySelector(".menu-close").addEventListener("click", () => {
  hideableNav.classList.remove("mobile-show");
  menuClose.classList.remove("mobile-show");
  first.classList.remove("mobile-show");
  navLinks.classList.remove("mobile-show");
  ctaBook.classList.remove("mobile-show");
});

function handleResize() {
  if (window.innerWidth > 768) {
    hideableNav.classList.remove("mobile-show");
    menuClose.classList.remove("mobile-show");
    first.classList.remove("mobile-show");
    navLinks.classList.remove("mobile-show");
    ctaBook.classList.remove("mobile-show");
  }
}

window.addEventListener("resize", handleResize);
