import "./assets/scss/all.scss";
import "bootstrap";
// swiper 這段 import 請不要動它，因為還沒寫輪播，所以會顯示錯誤
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

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

// 好評推薦
var swiper = new Swiper(".recommendSwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 24,
  grabCursor: true,
});
var swiper = new Swiper(".recommendSwiperPhone", {
  slidesPerView: 1.8,
  centeredSlides: true,
  spaceBetween: 24,
  grabCursor: true,
});


// 熱門商家
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

// // 熱門商家 modal
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


// 精選商家-彈窗內商家圖片
var swiper = new Swiper(".featuredSwiper",{
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
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


// 揪團活動 - Jo到夥伴 (選擇日期功能) -- 倫倫
const dateInput = document.getElementById("dateInput");

dateInput.addEventListener("click", function () {
  dateInput.classList.add("cus-input-focus");
});

// 在 document 上添加 click 事件监听器
document.addEventListener("click", function (event) {
  // 检查点击的目标是否是 dateInput
  if (!dateInput.contains(event.target)) {
    dateInput.classList.remove("cus-input-focus");
  }
});

dateInput.addEventListener("change", function () {
  const styleSheet = document.styleSheets[0];

  if (dateInput.value) {
    styleSheet.insertRule(
      'input[type="date"].custom-date::before { color: transparent; }',
      styleSheet.cssRules.length
    );
    dateInput.classList.add("text-dark");
  } else {
    styleSheet.insertRule(
      'input[type="date"].custom-date::before { color: #808080; }',
      styleSheet.cssRules.length
    );
    dateInput.classList.remove("text-dark");
  }

  // 使用 Promise 以实现并行执行
  Promise.resolve().then(() => {
    dateInput.classList.remove("cus-input-focus"); // 同时移除
  });
});

//interaction
//篩選部分
const blockElement = document.getElementById("block");

blockElement.addEventListener("change", function () {
  if (this.value === "0") {
    this.style.color = "#808080"; // 灰色
    this.style.fontWeight = "400"; // 字重回到普通
  } else {
    this.style.color = "#000000"; // 黑色
    this.style.fontWeight = "700"; // 字重變粗
  }
});

const typeElement = document.getElementById("type");

typeElement.addEventListener("change", function () {
  if (this.value === "0") {
    this.style.color = "#808080"; // 灰色
    this.style.fontWeight = "400"; // 字重回到普通
  } else {
    this.style.color = "#000000"; // 黑色
    this.style.fontWeight = "700"; // 字重變粗
  }
});
