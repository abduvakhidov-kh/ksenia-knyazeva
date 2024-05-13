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
  breakpoints: {
    300: {
      slidesPerView: 2.5,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    // when window width is >= px
    1200: {
      slidesPerView: 5.5,
      spaceBetween: 30
    },
  },

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

  // interactive menu
const OPEN_BTN = ".interactive-menu__open-btn";
const CLOSE_BTN = ".interactive-menu__close-btn";
const OPEN_BTN_HIDDEN = "interactive-menu__open-btn-hidden";

const interactiveMenuOpenBtn = document.querySelector(OPEN_BTN);
const interactiveMenuCloseBtn = document.querySelector(CLOSE_BTN);
const interactiveMenu = document.querySelector(".interactive-menu");

interactiveMenuOpenBtn.addEventListener("click",function () {
  interactiveMenu.style.maxHeight = interactiveMenu.scrollHeight + "px";
  interactiveMenuOpenBtn.classList.toggle(OPEN_BTN_HIDDEN);
})

interactiveMenuCloseBtn.addEventListener("click", function () {
  interactiveMenu.style.maxHeight = "0";
  interactiveMenuOpenBtn.classList.toggle(OPEN_BTN_HIDDEN);
})

  const icons = document.querySelectorAll('.interactive-menu__icons-container__icon');
  const interactiveMenuDropdown = document.querySelectorAll('.interactive-menu__dropdown');

  icons.forEach(icon => {
    icon.addEventListener('click', function() {
      const attachedId = this.getAttribute('id');
      interactiveMenuDropdown.forEach(dropdown => {
        const dropdownAttachedId = dropdown.getAttribute('data-attached');
        if (attachedId === dropdownAttachedId) {
          const isOpen = dropdown.classList.contains('show-interactive-menu-dropdown');
          interactiveMenuDropdown.forEach(d => d.classList.remove('show-interactive-menu-dropdown'));
          icons.forEach(i => i.classList.remove('show-interactive-menu-icon'));
          if (!isOpen) {
            dropdown.classList.add('show-interactive-menu-dropdown');
            this.classList.add('show-interactive-menu-icon');
            interactiveMenu.classList.add('show-overlay');
          } else {
            interactiveMenu.classList.remove('show-overlay');
          }
        }
      });
    });
  });
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

MicroModal.init();
