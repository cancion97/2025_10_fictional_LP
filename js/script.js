// == 参考 ==
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
// https://cubic-bezier.com
// https://fuuno.net/ani/ani29/ani29.html
// https://developer.mozilla.org/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API

//ハンバーガーメニュー
const menu = document.querySelector(".menu");
const hbgButton = document.querySelector(".js-hbgButton");
const hbgPath = document.querySelectorAll(".js-hbgPath");

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

hbgButton.addEventListener("click", () => {
  if (hbgButton.classList.contains("is-open")) {
    // 閉じるとき
    hbgPath.forEach((e) => e.animate(keyframeClose, timingClose));
    hbgButton.classList.remove("is-open");
    menu.classList.remove("active"); // ← 閉じる時も反映
  } else {
    // 開くとき
    hbgPath.forEach((e) => e.animate(keyframeOpen, timingOpen));
    hbgButton.classList.add("is-open");
    menu.classList.add("active");
  }
});

//横スクロール
const slider = document.querySelector(".horizontal_scroll");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active"); // grabbing に切替
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active"); // grab に戻す
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active"); // grab に戻す
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; // 1はスクロールスピード
  slider.scrollLeft = scrollLeft - walk;
});
