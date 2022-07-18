import { pets } from '../../data/pets.js';

export const getPopUp = (event) => {
    const index = event.target.closest('.pets__card').dataset.index;
    const popUp = document.createElement('div');
    popUp.classList.add('popup-wrapper');
    popUp.innerHTML = `
    <div class="popup-container">
    <div class="pets__btn popup__btn-close">
        <img src="../../assets/icons/close.png" alt="icon-close">
    </div>
    <img src="${pets[index].img}" alt="image-pets">
    <div class="popup__description">
        <h3 class="popup__description-name">${pets[index].name}</h3>
        <h4 class="popup__description-breed">${pets[index].breed}</h4>
        <p class="popup__description-text">${pets[index].description}</p>
        <ul>
            <li><span>Age:</span> <span>${pets[index].age}</span></li>
            <li><span>Inoculations:</span><span>${pets[index].inoculations}</span></li>
            <li><span>Diseases:</span><span>${pets[index].diseases}</span></li>
            <li><span>Parasites:</span><span>${pets[index].parasites}</span></li>
        </ul>
    </div>
    </div>
    `;
    document.getElementById('body').classList.add('no-scroll');

    document.getElementById('body').append(popUp);
    const btnClose = popUp.querySelector('.popup__btn-close');
    btnClose.addEventListener('click', () => {
        popUp.remove();
        document.getElementById('body').classList.remove('no-scroll');
    })
}