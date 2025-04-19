const menuToggle = document.getElementById("menu-toggle");
const navLink = document.getElementById("nav-link");


menuToggle.addEventListener("click", () => {
  navLink.classList.toggle("mobile-menu");
  menuToggle.classList.toggle("open");
});


document.querySelectorAll(".nav-link a").forEach(link => {
  link.addEventListener("click", () => {
    navLink.classList.remove("mobile-menu");
    menuToggle.classList.remove("open");
  });
});
