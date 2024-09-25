import './assets/scss/all.scss';
import 'bootstrap';
// swiper 這段 import 請不要動它，因為還沒寫輪播，所以會顯示錯誤
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';


// 精選商家-彈窗內商家圖片
var swiper = new Swiper(".featuredSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
        nextEl: ".swiper-next",
    },
});