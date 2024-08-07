document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#hamburger-menu");

  // Toggle 'active' class when hamburger menu is clicked
  hamburger.onclick = (e) => {
    e.preventDefault(); // Mencegah tindakan default browser
    navbarNav.classList.toggle("active");
  };

  // Close navbar when clicking outside
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
});
