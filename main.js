import './assets/scss/all.scss';
import 'bootstrap';
// swiper 這段 import 請不要動它，因為還沒寫輪播，所以會顯示錯誤
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';


//interaction 
//篩選部分
const blockElement = document.getElementById('block');

blockElement.addEventListener('change', function () {
    if (this.value === "0") {
        this.style.color = '#808080'; // 灰色
        this.style.fontWeight = '400'; // 字重回到普通
    } else {
        this.style.color = '#000000'; // 黑色
        this.style.fontWeight = '700'; // 字重變粗
    }
});

const typeElement = document.getElementById('type');

typeElement.addEventListener('change', function () {
    if (this.value === "0") {
        this.style.color = '#808080'; // 灰色
        this.style.fontWeight = '400'; // 字重回到普通
    } else {
        this.style.color = '#000000'; // 黑色
        this.style.fontWeight = '700'; // 字重變粗
    }
});


var swiper = new Swiper(".storeSwiper", {
    slidesPerView: 4,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 16,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        },
    },
});


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