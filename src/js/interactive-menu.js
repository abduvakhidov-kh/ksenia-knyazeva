// interactive menu
const OPEN_BTN = ".interactive-menu__open-btn";
const CLOSE_BTN = ".interactive-menu__close-btn";
const OPEN_BTN_HIDDEN = "interactive-menu__open-btn-hidden";

const interactiveMenuOpenBtn = document.querySelector(OPEN_BTN);
const interactiveMenuCloseBtn = document.querySelector(CLOSE_BTN);
const socialMedia = document.querySelector(".social-media-section");

interactiveMenuOpenBtn.addEventListener("click",function (e) {
  socialMedia.style.maxHeight = socialMedia.scrollHeight + "px";
  interactiveMenuOpenBtn.classList.toggle(OPEN_BTN_HIDDEN);
})

interactiveMenuCloseBtn.addEventListener("click", function (e) {
  socialMedia.style.maxHeight = "0";
  interactiveMenuOpenBtn.classList.toggle(OPEN_BTN_HIDDEN);
})
