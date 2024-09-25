import './assets/scss/all.scss';
import 'bootstrap';
// swiper 這段 import 請不要動它，因為還沒寫輪播，所以會顯示錯誤
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

//index
//熱門商家
var swiper = new Swiper(".index-featuredShopSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,
  
  breakpoints: {
    "@0.00": {
      slidesPerView: 1.25,
      spaceBetween: 24,
      centeredSlides: true,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 24,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
      centeredSlides: false,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 精選商家-彈窗內商家圖片
var swiper = new Swiper(".featuredSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
        nextEl: ".swiper-button-next",
    },
});