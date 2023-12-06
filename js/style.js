let heroBg = document.querySelector(".hero");

setInterval(() => {
  heroBg.style.backgroundImage = "url(img/bg-light.jpg)";

  setTimeout(() => {
    heroBg.style.backgroundImage = "url(img/bg.jpg)";
  }, 1000);
}, 2200);
var swiper = new Swiper(".vehicules-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabcursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabcursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
