import {fetchPUT} from "./Fetch/fetchPUT.js";
import {PaintModifiedCard} from "./paintModifiedCard.js";
import {Loader} from "./loader.js";
import {allActualCards} from "./showAllCards.js";


export async function SaveChangeInfo(objChange, card) {

    await Loader(card.querySelector('.doctor-name'), 'SAVE INFO...');

    const modifiedCard = await fetchPUT(objChange);

    setTimeout(await PaintModifiedCard, 2000, modifiedCard, card);


    //обновление актуального массива карточек
    allActualCards.forEach((elem, index) => {

        elem.id === modifiedCard.id && allActualCards.splice(index, 1, modifiedCard);

    });
}

