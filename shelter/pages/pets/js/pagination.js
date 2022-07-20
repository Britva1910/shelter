import { pets } from "../../data/pets.js";
import { getPopUp } from "../../main/js/modalWindows.js";

const paginationContainer = document.getElementById('pets__container');
const counter = document.getElementById('pagination_counter');
const btnFirst = document.getElementById('btn_first');
const btnPrev = document.getElementById('btn_prev');
const btnNext = document.getElementById('btn_next');
const btnLast = document.getElementById('btn_last');

const MEDIA_LAPTOP = 1280;
const MEDIA_TABLET = 768;
const WIDTH = document.documentElement.clientWidth;
const { pages, cards } = getNumberPages(WIDTH);
let currentSetCards;
let indexCurrentPage = 0;

function getNumberPages(WIDTH) {
	if (WIDTH > MEDIA_LAPTOP) {
		return { pages: 6, cards: 8 };
	} else if (WIDTH > MEDIA_TABLET) {
		return { pages: 8, cards: 6 };
	} else {
		return { pages: 16, cards: 3 };
	};
};

const generatePseudorandomSetNumbers = (pages, cards) => {
	const setNumbers = [];
	const arrRandomNumbers = [];
	const MAX_FREQUENCY_CARDS = 6;

	for (let i = 0; i < MAX_FREQUENCY_CARDS; i++) {
		arrRandomNumbers.push(...[...Array(8).keys()].sort(() => Math.random() - 0.5));
	};

	for (let i = 0; i < pages; i++) {
		const setCardFoPage = [];
		for (let j = 0; j < cards; j++) {
			let index = arrRandomNumbers.length - 1;
			while (setCardFoPage.includes(arrRandomNumbers[index])) {
				index -= 1;
			};
			setCardFoPage.push(arrRandomNumbers[index]);
			arrRandomNumbers.splice(index, 1);
		};
		setNumbers.push(setCardFoPage);
	};
	return setNumbers;
};

const getSetOfCards = (setNumbers) => {
	const setCards = setNumbers.map(currentArr => {
		return currentArr.map(number => {
			const petsCard = document.createElement('div');
			petsCard.innerHTML = `
			<div class="pets__card" data-index="${pets[number].index}">
			<img src="${pets[number].img}" class="card__image" alt="pets">
				<div class="card__name">${pets[number].name}</div>
				<button class=" button button-bordered card__btn">Learn more</button>
			</div>
			`;
			petsCard.addEventListener('click', (event) => {
				getPopUp(event);
			});
			return petsCard;
		});
	});
	currentSetCards = setCards;
	return setCards;
};

const renderPetsCards = (setCards, pageNumber = 0) => {
	setCards[pageNumber].forEach(current => {
		paginationContainer.appendChild(current);
	});
};

export const initPagination = () => {
	const setCardsNumbersFoPage = generatePseudorandomSetNumbers(pages, cards);
	const setCards = getSetOfCards(setCardsNumbersFoPage);
	renderPetsCards(setCards, 0);
};

const showAnotherPage = (pageNumber) => {
	indexCurrentPage = pageNumber;

	if (indexCurrentPage === 0) {
		btnPrev.disabled = true;
		btnFirst.disabled = true;
		btnPrev.classList.add('btn__disabled');
		btnFirst.classList.add('btn__disabled');
		btnPrev.classList.remove('btn__enabled');
		btnFirst.classList.remove('btn__enabled');
		btnPrev.classList.remove('btn__hover');
		btnFirst.classList.remove('btn__hover');
	} else {
		btnPrev.disabled = false;
		btnFirst.disabled = false;
		btnPrev.classList.add('btn__enabled');
		btnFirst.classList.add('btn__enabled');
		btnPrev.classList.remove('btn__disabled');
		btnFirst.classList.remove('btn__disabled');
		btnPrev.classList.add('btn__hover');
		btnFirst.classList.add('btn__hover');

	};

	if (indexCurrentPage === pages - 1) {
		btnNext.disabled = true;
		btnLast.disabled = true;
		btnNext.classList.add('btn__disabled');
		btnLast.classList.add('btn__disabled');
		btnNext.classList.remove('btn__enabled');
		btnLast.classList.remove('btn__enabled');
		btnNext.classList.remove('btn__hover');
		btnLast.classList.remove('btn__hover');

	} else {
		btnNext.disabled = false;
		btnLast.disabled = false;
		btnNext.classList.add('btn__enabled');
		btnLast.classList.add('btn__enabled');
		btnNext.classList.remove('btn__disabled');
		btnLast.classList.remove('btn__disabled');
		btnNext.classList.add('btn__hover');
		btnLast.classList.add('btn__hover');
	}

	paginationContainer.innerHTML = '';
	renderPetsCards(currentSetCards, indexCurrentPage);
	counter.innerHTML = `${indexCurrentPage + 1}`;
};

btnNext.onclick = () => {
	indexCurrentPage += 1;
	showAnotherPage(indexCurrentPage);
};

btnPrev.onclick = () => {
	indexCurrentPage -= 1;
	showAnotherPage(indexCurrentPage);
};

btnFirst.onclick = () => {
	indexCurrentPage = 0;
	showAnotherPage(indexCurrentPage);
};

btnLast.onclick = () => {
	indexCurrentPage = pages - 1;
	showAnotherPage(indexCurrentPage);
};