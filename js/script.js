// == 参考 ==
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
// https://cubic-bezier.com
// https://fuuno.net/ani/ani29/ani29.html
// https://developer.mozilla.org/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API

//ローディング画面
const loading = document.querySelector("#loading_container");
setTimeout(() => {
  loading.classList.add("active");
}, "4000");

// ハンバーガーメニュー
const menu = document.querySelector(".menu");
const hbgButton = document.querySelector(".js-hbgButton");
const hbgPath = document.querySelectorAll(".js-hbgPath");
const carts = document.querySelectorAll(".cart");

// パスの形状を定義
// パスの形状を定義
const pathOpen = "M 0,20 C 20,20 20,20 40,20 S 60,20 80,20 S 100,20 120,20"; // 直線
const pathClose = "M 0,20 C 20,0 20,40 40,20 S 60,40 80,20 S 100,40 120,20"; // 波線 (元の形状)

// ハンバーガーメニュークリック
// ... (前略) ...
// ハンバーガーメニュークリック
hbgButton.addEventListener("click", () => {
  if (hbgButton.classList.contains("is-open")) {
    // 🔹 閉じるとき
    // d属性を波線に瞬時にセット（⚠️ setTimeoutを削除）
    hbgPath.forEach((e) => e.setAttribute("d", pathClose)); // ⭐️ ここをsetTimeoutなしで実行

    hbgButton.classList.remove("is-open");
    menu.classList.remove("active");

    // カートを表示
    carts.forEach((c) => {
      c.style.opacity = "1";
      c.style.pointerEvents = "auto";
    });
  } else {
    // 🔹 開くとき
    // d属性を直線に瞬時にセット
    hbgPath.forEach((e) => e.setAttribute("d", pathOpen));

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
  new Swiper(".slideshow", {
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
  const wrapper = document.querySelector(".slideshow .swiper-wrapper");
  if (wrapper) {
    wrapper.style.transitionTimingFunction = "linear";
  }
});

//レビュー
window.addEventListener("load", () => {
  const swiper = new Swiper(".review", {
    loop: true, // 無限ループ
    slidesPerView: 1, // 常に1枚ずつ表示
    spaceBetween: 32, // スライドの間隔
    speed: 1500, // 切り替えアニメーション速度（ミリ秒）
    autoplay: {
      delay: 3000, // 2.5秒ごとに次へ
      disableOnInteraction: false, // 操作しても止まらない
    },
    allowTouchMove: true, // ドラッグ/スワイプOK
    grabCursor: true, // カーソルを「手の形」に
    centeredSlides: true, // 中央寄せ（好みで）
    loopAdditionalSlides: 2, // 無限ループ時の補助スライド
  });
});

// カウンター
const number = document.querySelector(".number");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");

let count = 0;

// 数字を更新＆マイナスボタン制御する関数
function updateDisplay() {
  number.textContent = count;
  minusBtn.disabled = count <= 0; // 0以下なら押せない
}

plusBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

// 初期状態を反映
updateDisplay();

// カートに入れるボタン書き換え
const cartBtn = document.querySelector(".cart_btn");
const cartImg = document.querySelector("#cart_img");

cartBtn.addEventListener("click", () => {
  cartBtn.firstChild.textContent = "カートに追加しました！";
  cartImg.src = "images/cart_add.png";
});

//loading

//         // 3. ローディングテキストの更新
//         loadingText.textContent = `Loading... ${textPercentage}%`;
//       } else {
//         // 100%に達したらアニメーションを終了
//         clearInterval(intervalId);
//         loadingText.textContent = "Complete! Enjoy Your Beer!";

//         // オプション: 最後の泡の動きを追加（完了アニメーション）
//         const foam = beerLiquid.nextElementSibling;
//         foam.style.transition = "transform 0.5s, opacity 0.5s";
//         foam.style.opacity = "1";
//       }
//     }, intervalTime);
//   };

//   fillBeer(); // アニメーションを開始
// });
