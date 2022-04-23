import { activeBurgerMenu, burgerMenu, body } from './js/burger.js';

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

})