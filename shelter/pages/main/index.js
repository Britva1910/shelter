import { activeBurgerMenu, burgerMenu, body } from './js/burger.js'
import { getPopUp } from '../main/js/modalWindows.js';

burgerMenu.addEventListener('click', activeBurgerMenu);

body.addEventListener('click', (e) => {
    if (e.target.classList.value === 'menu-burger-wrapper') {
        activeBurgerMenu();
    } else if (e.target.classList.value === 'nav__link') {
        activeBurgerMenu();
    };
});

const allPetsCards = document.querySelectorAll('.pets__card');
allPetsCards.forEach(elem => elem.addEventListener('click', (event) => {
    getPopUp(event);
    document.getElementById('body').classList.toggle('no-scroll');
}));

document.addEventListener('click', (event) => {
    if (event.target.classList.value === 'popup-wrapper') {
        document.querySelector('.popup-wrapper').remove();
        document.getElementById('body').classList.remove('no-scroll');
    };
});