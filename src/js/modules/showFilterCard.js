import {cards} from "./variables.js";
import {allActualCards} from "./showAllCards.js";


export function ShowFilterCard(filterName, filterUsed) {

    const cardForFilter = cards.querySelectorAll('.card');//перечень отображаемых на экране карточек

    allActualCards.forEach(card => {

        if (card[`${filterName}`] !== filterUsed) {

            cardForFilter.forEach(displayedCard => {

                (+displayedCard.dataset.id === card.id) && (displayedCard.style.display = 'none');
            })
        }
    })
}


export function ResetFilter() {

    const cardForFilter = cards.querySelectorAll('.card');

    cardForFilter.forEach(displayedCard => {

        displayedCard.style.display = 'block';

    })
}