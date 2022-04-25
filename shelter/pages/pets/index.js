import { activeBurgerMenu, burgerMenu, body } from './js/burger.js';
import { getPopUp } from '../main/js/modalWindows.js'

burgerMenu.addEventListener('click', activeBurgerMenu);
body.addEventListener('click', (e) => {
    if (e.target.classList.value === 'menu-burger-wrapper') {
        activeBurgerMenu();
    } else if (e.target.classList.value === 'nav__link') {
        activeBurgerMenu();
    }
})

const allBtnPets = document.querySelectorAll('.card__btn');
allBtnPets.forEach(elem => elem.addEventListener('click', (event) => getPopUp(event)));
document.addEventListener('click', (event) => {
    if (event.target.classList.value === 'popup-wrapper') {
        document.querySelector('.popup-wrapper').remove();
    }
})