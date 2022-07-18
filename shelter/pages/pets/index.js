import { activeBurgerMenu, burgerMenu, body } from './js/burger.js';
import { getPopUp } from './js/modalWindows.js'


console.log(document.getElementById('burger-menu'));

burgerMenu.addEventListener('click', activeBurgerMenu);
body.addEventListener('click', (e) => {
    if (e.target.classList.value === 'menu-burger-wrapper') {
        activeBurgerMenu();
    } else if (e.target.classList.value === 'nav__link') {
        activeBurgerMenu();
    }
})

body.addEventListener('click', (e) => {
    console.log(e.target.classList.value);

});

const allBtnPets = document.querySelectorAll('.card__btn');
allBtnPets.forEach(elem => elem.addEventListener('click', (event) => getPopUp(event)));
document.addEventListener('click', (event) => {
    if (event.target.classList.value === 'popup-wrapper') {
        document.querySelector('.popup-wrapper').remove();
    }
})