const menuBar = document.querySelector(".nav-menu-bar");
const menuNav = document.querySelector(".nav-menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.getElementById("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});
