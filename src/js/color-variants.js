// variant colors logic product page
let colorItems = document.querySelectorAll(".color__item");

colorItems.forEach(function (colorItem) {
  let dataColor = colorItem.getAttribute("data-color");
  colorItem.style.backgroundColor = dataColor;
});