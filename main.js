import "./assets/scss/all.scss";
import "bootstrap";
// swiper 這段 import 請不要動它，因為還沒寫輪播，所以會顯示錯誤
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
//wow
new WOW().init();

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
var swiper = new Swiper(".featuredSwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// interaction
var swiper = new Swiper(".storeSwiper", {
  spaceBetween: 4,
  slidesPerView: 4,
  spaceBetween: 13,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3.5,
      spaceBetween: 16,
      centeredSlides: false,
    },
  },
});
var swiper2 = new Swiper(".storeSwiper2", {
  spaceBetween: 10,

  thumbs: {
    swiper: swiper,
  },
});

// 揪團活動 - Jo到夥伴 (選擇日期功能) -- 倫倫
document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("dateInput");

  if (dateInput) {
    // 确认 dateInput 不为 null

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
  } else {
    console.error("Date input element not found");
  }

  const activitySelect = document.getElementById("activitySelect");

  // 默认 select 的文本颜色
  activitySelect.style.color = "#808080";

  // 监听 select 下拉框点击事件，重置颜色
  activitySelect.addEventListener("click", function () {
    // 当点击时，重置所有选项的颜色为灰色
    for (let i = 0; i < activitySelect.options.length; i++) {
      activitySelect.options[i].style.color = "#808080";
    }
  });

  // 监听选择更改事件
  activitySelect.addEventListener("change", function () {
    // 将选中项的文本颜色设置为深色
    this.options[this.selectedIndex].style.color = "#333333";
    // 改变 select 自身显示的文本颜色为深色
    this.style.color = "#333333";
  });

  const locationSelect = document.getElementById("locationSelect");

  // 默认 select 的文本颜色
  locationSelect.style.color = "#808080";

  // 监听 select 下拉框点击事件，重置颜色
  locationSelect.addEventListener("click", function () {
    // 当点击时，重置所有选项的颜色为灰色
    for (let i = 0; i < locationSelect.options.length; i++) {
      locationSelect.options[i].style.color = "#808080";
    }
  });

  // 监听选择更改事件
  locationSelect.addEventListener("change", function () {
    // 将选中项的文本颜色设置为深色
    this.options[this.selectedIndex].style.color = "#333333";
    // 改变 select 自身显示的文本颜色为深色
    this.style.color = "#333333";
  });
});

// 揪團活動 - 馬上JO(發起活動) - 點選上傳圖片功能 -- 倫倫
document.addEventListener("DOMContentLoaded", function () {
  // 上傳檔案功能modal
  const fileUploadModalWrap = document.getElementById("fileUploadModalWrap");
  const closeModal = document.getElementsByClassName("fileUploadModalClose")[0];
  const fileUploadInput = document.getElementById("fileUpload");

  const startJoTeamModalWrap = document.getElementById("startJoTeamModalWrap");
  const startJoTeamCloseModal = document.getElementsByClassName(
    "startJoTeamModalClose"
  )[0];

  document
    .getElementById("uploadButton")
    .addEventListener("click", function () {
      fileUploadInput.click();
    });

  document
    .getElementById("uploadForm")
    .addEventListener("submit", function (event) {
      // 確保選擇了文件
      if (!fileUploadInput.files.length) {
        event.preventDefault(); // 防止表單提交
        fileUploadModalWrap.style.display = "block";
      } else {
        event.preventDefault(); // 防止表單提交
        startJoTeamModalWrap.style.display = "block";
      }
    });

  closeModal.onclick = function () {
    fileUploadModalWrap.style.display = "none";
  };

  startJoTeamCloseModal.onclick = function () {
    startJoTeamModalWrap.style.display = "none";
    document.getElementById("uploadForm").submit(); // 手動觸發表單提交
  };
});

// 揪團活動 - 馬上JO(發起活動) - 點選日期功能 -- 倫倫
document.addEventListener("DOMContentLoaded", function () {
  const startEventDateInput = document.getElementById(
    "groupActivitiesStartEventDateInput"
  );

  if (startEventDateInput) {
    // 确认 dateInput 不为 null

    startEventDateInput.addEventListener("click", function () {
      startEventDateInput.classList.add("cus-input-focus");
    });

    // 在 document 上添加 click 事件监听器
    document.addEventListener("click", function (event) {
      // 检查点击的目标是否是 dateInput
      if (!startEventDateInput.contains(event.target)) {
        startEventDateInput.classList.remove("cus-input-focus");
      }
    });

    startEventDateInput.addEventListener("change", function () {
      const styleSheet = document.styleSheets[0];

      if (startEventDateInput.value) {
        styleSheet.insertRule(
          'input[type="date"].groupActivities-startEvent-custom-date::before { color: transparent; }',
          styleSheet.cssRules.length
        );
        startEventDateInput.classList.add("text-dark");
      } else {
        styleSheet.insertRule(
          'input[type="date"].groupActivities-startEvent-custom-date::before { color: #808080; }',
          styleSheet.cssRules.length
        );
        startEventDateInput.classList.remove("text-dark");
      }

      // 使用 Promise 以实现并行执行
      Promise.resolve().then(() => {
        startEventDateInput.classList.remove("cus-input-focus"); // 同时移除
      });
    });
  } else {
    console.error("Date input element not found");
  }

  // 揪團活動 - 馬上JO(發起活動) - 點選時間功能 -- 倫倫
  const groupActivitiesStartEventTimeInput = document.getElementById(
    "groupActivitiesStartEventTimeInput"
  );

  if (groupActivitiesStartEventTimeInput) {
    // 确认 dateInput 不为 null

    groupActivitiesStartEventTimeInput.addEventListener("click", function () {
      groupActivitiesStartEventTimeInput.classList.add("cus-input-focus");
    });

    // 在 document 上添加 click 事件监听器
    document.addEventListener("click", function (event) {
      // 检查点击的目标是否是 dateInput
      if (!groupActivitiesStartEventTimeInput.contains(event.target)) {
        groupActivitiesStartEventTimeInput.classList.remove("cus-input-focus");
      }
    });

    groupActivitiesStartEventTimeInput.addEventListener("change", function () {
      const styleSheet = document.styleSheets[0];

      if (groupActivitiesStartEventTimeInput.value) {
        styleSheet.insertRule(
          'input[type="time"].groupActivities-startEvent-custom-time::before { color: transparent; }',
          styleSheet.cssRules.length
        );
        groupActivitiesStartEventTimeInput.classList.add("text-dark");
      } else {
        styleSheet.insertRule(
          'input[type="time"].groupActivities-startEvent-custom-time::before { color: #808080; }',
          styleSheet.cssRules.length
        );
        groupActivitiesStartEventTimeInput.classList.remove("text-dark");
      }

      // 使用 Promise 以实现并行执行
      Promise.resolve().then(() => {
        groupActivitiesStartEventTimeInput.classList.remove("cus-input-focus"); // 同时移除
      });
    });
  } else {
    console.error("Date input element not found");
  }

  // 揪團活動 - 馬上JO(發起活動) - 選單文字點選後顏色更改功能 -- 倫倫
  const activityStartEventSelect = document.getElementById(
    "activityStartEventSelect"
  );

  // 默认 select 的文本颜色
  activityStartEventSelect.style.color = "#808080";

  // 监听 select 下拉框点击事件，重置颜色
  activityStartEventSelect.addEventListener("click", function () {
    // 当点击时，重置所有选项的颜色为灰色
    for (let i = 0; i < activityStartEventSelect.options.length; i++) {
      activityStartEventSelect.options[i].style.color = "#808080";
    }
  });

  // 监听选择更改事件
  activityStartEventSelect.addEventListener("change", function () {
    // 将选中项的文本颜色设置为深色
    this.options[this.selectedIndex].style.color = "#333333";
    // 改变 select 自身显示的文本颜色为深色
    this.style.color = "#333333";
  });

  const locationStartEventSelect = document.getElementById(
    "locationStartEventSelect"
  );

  // 默认 select 的文本颜色
  locationStartEventSelect.style.color = "#808080";

  // 监听 select 下拉框点击事件，重置颜色
  locationStartEventSelect.addEventListener("click", function () {
    // 当点击时，重置所有选项的颜色为灰色
    for (let i = 0; i < locationStartEventSelect.options.length; i++) {
      locationStartEventSelect.options[i].style.color = "#808080";
    }
  });

  // 监听选择更改事件
  locationStartEventSelect.addEventListener("change", function () {
    // 将选中项的文本颜色设置为深色
    this.options[this.selectedIndex].style.color = "#333333";
    // 改变 select 自身显示的文本颜色为深色
    this.style.color = "#333333";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // 設定原始和點擊後的圖片路徑
  // const originalSrc = "../assets/images/heart.svg";
  const originalSrc = `${import.meta.env.BASE_URL}assets/images/heart.svg`;
  // const activeSrc = "../assets/images/clickHeart.svg";
  const activeSrc = `${import.meta.env.BASE_URL}assets/images/clickHeart.svg`;

  // 選取所有 .cus-groupActivities-card-body-heart 圖片
  const hearts = document.querySelectorAll(
    ".cus-groupActivities-card-body-heart"
  );

  const cardModal = document.getElementById("cardModal");
  const groupActivitiesListCardModal = document.querySelector(
    ".groupActivities-list-card-modal"
  );
  const groupActivitiesListCardModalClose = document.querySelector(
    ".groupActivities-list-card-modal-close"
  );

  const groupActivitiesListCardModalDialog = document.querySelector(
    ".groupActivities-list-card-modal-dialog"
  );

  // // const groupActivitiesListModalDialog = document.querySelector(
  // //   ".groupActivities-list-modal-dialog"
  // // );
  // const modalDialog = groupActivitiesModal.querySelector(
  //   ".groupActivities-list-modal-dialog-ani"
  // );
  // cardElement.addEventListener("click", function () {
  //   groupActivitiesModal.style.display = "block"; // 顯示 Modal

  //   // 使用小的延遲確保動畫可以被觸發
  //   setTimeout(() => {
  //     groupActivitiesModal.classList.add(
  //       "groupActivities-list-groupActivitiesModal-fade-show"
  //     );
  //     modalDialog.classList.add("show"); // 添加動畫
  //   }, 10);
  // });

  cardModal.addEventListener("click", function () {
    groupActivitiesListCardModal.classList.add(
      "groupActivities-list-card-modal-show"
    );

    //
  });

  //
  groupActivitiesListCardModalClose.addEventListener("click", function () {
    groupActivitiesListCardModal.classList.remove(
      "groupActivities-list-card-modal-show"
    ); // 移除 show 類

    // setTimeout(() => {
    //   groupActivitiesListCardModal.classList.remove(
    //     "groupActivities-list-card-modal-show"
    //   );
    //   // modal.style.opacity = ""; // 重置 opacity，為下次顯示做準備
    // }, 300); // 150 毫秒延遲與 CSS 過渡時間相符
  });

  // 為每個圖片添加點擊事件監聽器
  hearts.forEach((heart) => {
    heart.addEventListener("click", function (event) {
      // 防止點擊事件傳播到父層
      event.stopPropagation();
      // 切換圖片src
      if (heart.src.includes("heart.svg")) {
        heart.src = activeSrc; // 切換到已填滿的心形圖片
      } else {
        heart.src = originalSrc; // 切回原始心形圖片
      }
    });
  });
});

//interaction
//篩選部分
const selectElement = document.getElementById("select");

selectElement.addEventListener("change", function () {
  if (this.value === "0") {
    this.style.color = "#808080"; // 灰色
    this.style.fontWeight = "400"; // 字重回到普通
  } else {
    this.style.color = "#000000"; // 黑色
    this.style.fontWeight = "700"; // 字重變粗
  }
});

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

//不放最下面index輪播會出事
new WOW().init();