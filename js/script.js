// == 参考 ==
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
// https://cubic-bezier.com
// https://fuuno.net/ani/ani29/ani29.html
// https://developer.mozilla.org/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API

//ハンバーガーメニュー
// ハンバーガーメニュー
const menu = document.querySelector(".menu");
const hbgButton = document.querySelector(".js-hbgButton");
const hbgPath = document.querySelectorAll(".js-hbgPath");
const carts = document.querySelectorAll(".cart"); // ← すべてのカートを取得

// アニメーション設定
let timingOpen = {
  iterations: 1,
  duration: 200,
  fill: "forwards",
};

let timingClose = {
  iterations: 1,
  duration: 200,
  delay: 600,
  fill: "forwards",
};

// パスの形状
let keyframeOpen = [
  {
    d: "path('M 0,20 C 20,20 20,20 40,20 S 60,20 80,20 S 100,20 120,20')",
  },
];

let keyframeClose = [
  {
    d: "path('M 0,20 C 20,0 20,40 40,20 S 60,40 80,20 S 100,40 120,20')",
  },
];

// ハンバーガーメニュークリック
hbgButton.addEventListener("click", () => {
  if (hbgButton.classList.contains("is-open")) {
    // 🔹 閉じるとき
    hbgPath.forEach((e) => e.animate(keyframeClose, timingClose));
    hbgButton.classList.remove("is-open");
    menu.classList.remove("active");

    // カートを表示
    carts.forEach((c) => {
      c.style.opacity = "1";
      c.style.pointerEvents = "auto";
    });
  } else {
    // 🔹 開くとき
    hbgPath.forEach((e) => e.animate(keyframeOpen, timingOpen));
    hbgButton.classList.add("is-open");
    menu.classList.add("active");

    // カートを非表示
    carts.forEach((c) => {
      c.style.opacity = "0";
      c.style.pointerEvents = "none";
    });
  }
});

//swiper

window.addEventListener("load", () => {
  new Swiper(".swiper", {
    loop: true, // 無限ループ
    slidesPerView: "auto",
    allowTouchMove: false,
    speed: 6000, // スピード（遅くしたい場合は20000などに）
    freeMode: true, // 自由移動モードON
    freeModeMomentum: false,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  // スライドを途切れず動かすには timing-function を linear に
  const wrapper = document.querySelector(".swiper .swiper-wrapper");
  wrapper.style.transitionTimingFunction = "linear";
});

//レビュー
window.addEventListener("load", () => {
  const swiper = new Swiper(".review", {
    loop: true, // 無限ループ
    slidesPerView: 1, // 常に1枚ずつ表示
    spaceBetween: 32, // スライドの間隔
    speed: 1000, // 切り替えアニメーション速度（ミリ秒）
    autoplay: {
      delay: 2500, // 2.5秒ごとに次へ
      disableOnInteraction: false, // 操作しても止まらない
    },
    allowTouchMove: true, // ドラッグ/スワイプOK
    grabCursor: true, // カーソルを「手の形」に
    centeredSlides: true, // 中央寄せ（好みで）
    loopAdditionalSlides: 2, // 無限ループ時の補助スライド
  });
});
