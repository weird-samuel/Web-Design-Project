// navigation background color change on scroll
const navbar = document.querySelector("#navbar");
const mobNav = document.querySelector("#mob-nav");
const navBtn = document.querySelector("#mob-nav-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    navbar.classList.add("nav-bg");
    mobNav.classList.add("nav-bg");
  } else {
    navbar.classList.remove("nav-bg");
    mobNav.classList.remove("nav-bg");
  }
});

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("fa-regular");
  navBtn.classList.toggle("fa-x");
});

function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

// swiper js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // followFinger: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  parallax: true,
  speed: 1300,
  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: [0, 0, -400],
  //   },
  //   next: {
  //     translate: ["100%", 0, 0],
  //   },
  // },
});
