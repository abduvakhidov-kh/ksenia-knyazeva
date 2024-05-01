// accordion logic
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.parentElement.querySelector(".panel");
    const icon = this.querySelector(".icon");
    console.log(panel, this, panel.scrollHeight, icon);
    if (icon && panel.style.maxHeight) {
      if (panel.style.maxHeight) {
        icon.innerHTML = `<line x1="12" y1="1" x2="12" y2="23" style="stroke: #000; stroke-width: 1" />
        <line x1="1" y1="12" x2="23" y2="12" style="stroke: #000; stroke-width: 1" />`;
      } else {
        icon.innerHTML = `<line x1="1" y1="12" x2="23" y2="12" style="stroke: #000; stroke-width: 1" />`;
      }
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// variant colors logic product page
let colorItems = document.querySelectorAll(".color__item");

colorItems.forEach(function (colorItem) {
  let dataColor = colorItem.getAttribute("data-color");
  colorItem.style.backgroundColor = dataColor;
});

// tabs logic
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = button.getAttribute("data-tab");

      // Hide all tab contents
      tabContents.forEach((content) => {
        content.style.display = "none";
      });

      // Remove active class from all buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Show the selected tab content
      document.getElementById(tabId).style.display = "block";

      // Add active class to the clicked button
      button.classList.add("active");
    });
  });

  // -------------------dropdown----------------------

  // Получаем все элементы с классом "dropdown"
  const dropdowns = document.querySelectorAll(".dropdown");

  // Проходимся по каждому элементу
  dropdowns.forEach((dropdown) => {
    // Находим вложенный элемент .dropdown-content
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    // Добавляем обработчик события клика на .dropdown
    dropdown.addEventListener("click", (e) => {
      // Переключаем отображение dropdownContent при клике
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
      console.log(e.target);
      e.target.classList.contains("active")
        ? e.target.classList.remove("active")
        : e.target.classList.add("active");
    });

    // Предотвращаем скрытие dropdownContent при клике внутри него
    dropdownContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  // Добавляем обработчик события клика на document
  // document.addEventListener("click", () => {
  //   // Проходимся по каждому .dropdown
  //   dropdowns.forEach((dropdown) => {
  //     // Находим вложенный элемент .dropdown-content
  //     const dropdownContent = dropdown.querySelector(".dropdown-content");

  //     // Скрываем dropdownContent при клике вне .dropdown
  //     dropdownContent.style.display = "none";
  //   });
  // });
});
