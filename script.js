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
  // grabCursor: true,
  loop: true,
  //   autoplay: {
  //     delay: 3000,
  //   },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
