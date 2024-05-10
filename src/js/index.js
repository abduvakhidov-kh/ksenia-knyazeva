const swiper = new Swiper('.news-swiper', {
  slidesPerView: 4,
  spaceBetween: 30,

  navigation: {
    nextEl: '.news-swiper-button-next',
    // prevEl: '.swiper-button-prev',
  },
});

const similarsSwiper = new Swiper('.similars-swiper', {
  slidesPerView: 5.5,
  spaceBetween: 18,

  navigation: {
    nextEl: '.news-swiper-button-next',
    // prevEl: '.swiper-button-prev',
  },
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

// Select all elements with class collapsed-gallery
const galleryItems = document.querySelectorAll('.collapsed-gallery');

// Iterate over each gallery item
galleryItems.forEach(item => {
    // Get necessary elements from the original structure
    const imgSrc = item.querySelector('.gallery-left__img').src;
    const isNew = item.querySelector('.gallery-left span').textContent;
    const iconSrc = item.querySelector('.gallery-left__icon img').src;
    const title = item.querySelector('.gallery__title').textContent;
    const price = item.querySelector('.gallery__price').textContent;

    // Create new HTML structure
    const newHtml = `
        <li class="gallery-list__item">
            <div class="gallery-list__top">
                <img src="${imgSrc}" class="gallery-list__img" />
                <span>${isNew}</span>
                <button class="btn-reset gallery-list__icon">
                    <img src="${iconSrc}" />
                </button>
            </div>
            <div class="d-flex-between">
                <div class="gallery-list__info d-flex-column">
                    <p>${title}</p>
                    <span>${price}</span>
                </div>
                <button class="gallery-list__btn btn-reset">Добавить</button>
            </div>
        </li>
    `;

    // Replace the original HTML with the new structure
    item.outerHTML = newHtml;
});
