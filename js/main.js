// 手機版漢堡選單
const menuBtn = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const menuIcon = menuBtn.querySelector("i");

function setMenu(open) {
  navbar.classList.toggle("is-open", open);
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? "關閉選單" : "開啟選單");
  // 打開時圖示換成 X
  menuIcon.classList.toggle("fa-bars", !open);
  menuIcon.classList.toggle("fa-xmark", open);
}

menuBtn.addEventListener("click", () => {
  setMenu(!navbar.classList.contains("is-open"));
});

// 點選單內的連結後自動收起
navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});
