var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});