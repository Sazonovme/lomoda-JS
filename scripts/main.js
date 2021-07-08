// Для кнопки твоего города 
const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?'

headerCityButton.addEventListener('click', () => {
    const city = prompt('Укажите ваш город');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city);
});

//Блокировка скрола
const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth; //Страница со скролом - страница с контентом 
    document.body.style.cssText = `
        width: 100 %;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `;
};

const enableScroll = () => {
    document.body.style.cssText = '';
};

//Модальное окно
const subheaderCart = document.querySelector('.subheader__cart'); //Переменная корзины 
const cartOverlay = document.querySelector('.cart-overlay');//Переменная модального окна 

const cartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open'); // Добавление класса, чтобы открыть модальное окно
    disableScroll();//Скрыть боковой скролл 
};

const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open'); // Функция для закрытия модального окна
    enableScroll(); //Показать боковой скролл 
};

subheaderCart.addEventListener('click', cartModalOpen); // Открытие модального окна 

cartOverlay.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('cart__btn-close') || target.classList.contains('cart-overlay')) {
        cartModalClose();
    }
}); // Закрытие модального окна 