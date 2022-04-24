import { pets } from '../../data/pets.js';

const sliderContainer = document.querySelector('.pets__cards-container');
const btnLeft = document.getElementById('pets-btn-left');
const btnRight = document.getElementById('pets-btn-right');



const numberOfAnimals = 8;
let collection_1 = [];
let collection_2 = [];

const getRandom = () => Math.floor(Math.random() * numberOfAnimals)

const getRandomNumbersNoRepeats = () => {
    let randomNumber = getRandom();
    while (collection_1.includes(randomNumber) || collection_2.includes(randomNumber)) {
        randomNumber = getRandom();
    }
    return randomNumber;
}

const getNewCards = () => {
        const newCardsCollection = [];
        for (let i = 0; i < 3; i++) {
            const randomNumber = getRandomNumbersNoRepeats();
            const card = document.createElement('div');
            card.classList.add('pets__card');
            card.innerHTML = `  <img src="${pets[randomNumber].img}" class="card__image"></img>
                                <div class="card__name">${pets[randomNumber].name}</div>
                                <button class=" button button-bordered card__btn">Learn more</button>`;
            newCardsCollection.push(card);
            collection_2[i] = randomNumber;
            if (i === 2) {
                collection_1 = [...collection_2];
            }
        }


        return newCardsCollection;
    }
    //addNewCards()

const shiftLeft = () => {
    const cards = getNewCards();
    cards.forEach(element => {
        element.classList.add('anim-left');
        sliderContainer.append(element);
    });
    const allCards = document.querySelectorAll('.pets__card');
    allCards.forEach((element, index) => {
        if (index < 3) {
            element.remove();
        }
    })
}

const shiftRight = () => {
    const cards = getNewCards();
    cards.forEach(element => {
        element.classList.add('anim-right');
        sliderContainer.prepend(element);
    })
    const allCards = document.querySelectorAll('.pets__card');
    allCards.forEach((element, index) => {
        if (index > 2) {
            element.remove();
        }
    })
}

btnLeft.addEventListener('click', shiftLeft);
btnRight.addEventListener('click', shiftRight)