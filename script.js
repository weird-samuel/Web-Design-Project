// navigation background color change on scroll
const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    navbar.classList.add("nav-bg");
  } else {
    navbar.classList.remove("nav-bg");
  }
});

// swiper js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  followFinger: true,
  grabCursor: true,
  loop: false,
  //   autoplay: {
  //     delay: 3000,
  //   },
});
