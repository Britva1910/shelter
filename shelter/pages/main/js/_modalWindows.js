export const getPopUp = () => {
    const popUp = document.createElement('div');
    popUp.classList.add('popup-wrapper');
    popUp.innerHTML = `
    <div class="popup-container">
    <div class="pets__btn popup__btn-close">
        <img src="../../assets/icons/close.png" alt="">
    </div>
    <img src="../../assets/images/pets/jennifer.png" alt="">
    <div class="popup__description">
        <h3 class="popup__description-name">Jennifer</h3>
        <h4 class="popup__description-breed">Dog - Labrador</h4>
        <p class="popup__description-text">Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her
            favorite toys.</p>
        <ul>
            <li><span>Age:</span> <span>2 months</span></li>
            <li><span></span><span></span></li>
            <li><span></span><span></span></li>
            <li><span></span><span></span></li>
        </ul>
    </div>
    </div>
    `;
    document.getElementById('body').append(popUp);
    const btnClose = popUp.querySelector('.popup__btn-close');
    btnClose.addEventListener('click', () => {
        popUp.remove();
    })
}