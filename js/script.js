// =======================================
// Lenis 初期化（スムーズスクロール用）
// =======================================

import Lenis from "https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.28/dist/lenis.mjs";
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.querySelector(".top_btn");
  if (topBtn) {
    topBtn.addEventListener("click", (e) => {
      e.preventDefault();
      lenis.scrollTo(0, {
        duration: 0.7,
        easing: (t) => t,
      });
    });
  }
});

// =======================================
// ローディング画面制御
// =======================================
const loading = document.querySelector("#loading_container");
const pageTop = document.querySelector(".page_top");

setTimeout(() => {
  loading.classList.add("active");
  pageTop.classList.remove("no_scroll");
}, 4500); // ミリ秒指定なので文字列は不要

// =======================================
// ハンバーガーメニュー
// =======================================
const menu = document.querySelector(".menu");
const hbgButton = document.querySelector(".js-hbgButton");
const hbgPath = document.querySelectorAll(".js-hbgPath");
const carts = document.querySelectorAll(".cart");

// パスの形状
const pathOpen = "M 0,20 C 20,20 20,20 40,20 S 60,20 80,20 S 100,20 120,20";
const pathClose = "M 0,20 C 20,0 20,40 40,20 S 60,40 80,20 S 100,40 120,20";

hbgButton.addEventListener("click", () => {
  if (hbgButton.classList.contains("is-open")) {
    // 閉じる
    hbgPath.forEach((e) => e.setAttribute("d", pathClose));
    hbgButton.classList.remove("is-open");
    menu.classList.remove("active");
    carts.forEach((c) => {
      c.style.opacity = "1";
      c.style.pointerEvents = "auto";
    });
  } else {
    // 開く
    hbgPath.forEach((e) => e.setAttribute("d", pathOpen));
    hbgButton.classList.add("is-open");
    menu.classList.add("active");
    carts.forEach((c) => {
      c.style.opacity = "0";
      c.style.pointerEvents = "none";
    });
  }
});

// =======================================
// Swiper スライダー
// =======================================
window.addEventListener("load", () => {
  // 横スライダー（背景スライド）
  new Swiper(".slideshow", {
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    speed: 6000,
    freeMode: true,
    freeModeMomentum: false,
    autoplay: { delay: 0, disableOnInteraction: false },
  });

  const wrapper = document.querySelector(".slideshow .swiper-wrapper");
  if (wrapper) wrapper.style.transitionTimingFunction = "linear";

  // レビュー用スライダー
  new Swiper(".review", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 96,
    centeredSlides: true,
    speed: 1500,
    autoplay: { delay: 3000, disableOnInteraction: false },
    grabCursor: true,
  });
});

// =======================================
// カウンター
// =======================================
const number = document.querySelector(".number");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");

let count = 0;

function updateDisplay() {
  number.textContent = count;
  minusBtn.disabled = count <= 0;
}

plusBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

minusBtn.addEventListener("click", () => {
  if (count > 0) count--;
  updateDisplay();
});

updateDisplay();

// =======================================
// カートに入れるボタン
// =======================================
const cartBtn = document.querySelector(".cart_btn");
const cartImg = document.querySelector("#cart_img");

if (cartBtn && cartImg) {
  cartBtn.addEventListener("click", () => {
    cartBtn.firstChild.textContent = "カートに追加しました！";
    cartImg.src = "images/cart_add.png";
  });
}
