import { activeBurgerMenu, burgerMenu, body } from './js/burger.js';
import { initPagination } from './js/pagination.js';

initPagination();

burgerMenu.addEventListener('click', activeBurgerMenu);
body.addEventListener('click', (e) => {
    if (e.target.classList.value === 'menu-burger-wrapper') {
        activeBurgerMenu();
    } else if (e.target.classList.value === 'nav__link') {
        activeBurgerMenu();
    };
});

document.addEventListener('click', (event) => {
    if (event.target.classList.value === 'popup-wrapper') {
        document.querySelector('.popup-wrapper').remove();
        document.getElementById('body').classList.remove('no-scroll');
    };
});