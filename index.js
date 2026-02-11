const menuBtn = document.querySelector(".modal__btn");
const menuBtnColose = document.querySelector(".modal__btn--close");
const menuItem = document.querySelector(".site-nav-mobile");
console.log(menuItem);
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", openMenu);

function openMenu() {
  mobileMenu.classList.add("active");
}

menuBtnColose.addEventListener("click", closeMenu);
menuItem.addEventListener("click", closeMenu);

function closeMenu() {
  mobileMenu.classList.remove("active");
  console.log("kkk");
}

// gallery

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: false,
  // },
  autoplay: {
    delay: 5000,
  },

  // freeMode: true,
  // grid: {
  //   rows: 1,
  // },

  // effect: "coverflow",
  // coverflowEffect: {
  //   rotate: 30,
  //   slideShadows: false,
  // },
});
