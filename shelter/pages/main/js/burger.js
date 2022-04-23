export const burgerMenu = document.getElementById('burger-menu');
const burgerMenuAdd = document.getElementById('burger-menu-add');
const logo = document.getElementById('logo');
const wrapper = document.getElementById('menu-burger');
const overlay = document.getElementById('menu');
export const body = document.getElementById('body');


export const activeBurgerMenu = () => {
    burgerMenu.classList.toggle('rotate');
    overlay.classList.toggle('overlay');
    logo.classList.toggle('hidden');
    wrapper.classList.toggle('menu-burger-wrapper');
    body.classList.toggle('no-scroll');

}