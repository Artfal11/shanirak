const html = document.querySelector("html");

// Клик по бургер-меню
let headerBurger = document.querySelector('.header-burger');
let headerNav = document.querySelector('.header__body-list');

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active");
    html.classList.toggle("no-scroll");
    headerNav.classList.toggle("active");
});

// Вызов Попапа
let popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.close-popup');

popupBtn.forEach(item => {
    item.addEventListener("click", () => {
        popup.classList.add("open");
        html.classList.add("no-scroll");
    });
})

// Закрытие Попапа
popupClose.addEventListener("click", () => {
    popup.classList.remove("open");
    html.classList.remove("no-scroll");
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
});