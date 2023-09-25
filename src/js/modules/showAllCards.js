import {
    boardMessage,
    filters
} from "./variables.js";
import {fetchAllCardsGET} from "./Fetch/fetchGET.js";
import {PaintCard} from "./paintCard.js";
import {Loader} from "./loader.js";

export let allActualCards;//массив актуальных карточек

export async function ShowAllCards() {

    await Loader(filters, 'DOWNLOAD CARDS...');

    allActualCards = await fetchAllCardsGET();

    (allActualCards.length > 0) && boardMessage.classList.add('board-message-none');

    allActualCards.forEach(elem => {

        setTimeout(PaintCard, 400, elem);

    })

}