import './assets/scss/all.scss';
import 'bootstrap';
// swiper 這段 import 請不要動它，因為還沒寫輪播，所以會顯示錯誤
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

//index
//最新活動
var swiper = new Swiper(".index-newActivitySwiper", {
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
    el: ".swiper-pagination-indexNewActivity",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-indexNewActivity",
    prevEl: ".swiper-button-prev-indexNewActivity",
  },
});


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
    el: ".swiper-pagination-indexFeaturedShop",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-indexFeaturedShop",
    prevEl: ".swiper-button-prev-indexFeaturedShop",
  },
});

// 熱門商家 modal
var swiper = new Swiper(".indexModalMySwiper", {
  spaceBetween: 4,
  slidesPerView: 4,
  spaceBetween: 13,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next-indexModalMySwiper",
    prevEl: ".swiper-button-prev-indexModalMySwiper",
  },
  thumbs: {
    swiper: swiper,
  },

  breakpoints: {
    992: {
      slidesPerView: 3.5,
      spaceBetween: 16,
      centeredSlides: false,
    },
  },
});
var swiper2 = new Swiper(".indexModalMySwiper2", {
  spaceBetween: 4,
  spaceBetween: 16,
  thumbs: {
    swiper: swiper,
  },
});