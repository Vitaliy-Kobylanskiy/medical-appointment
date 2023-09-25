import {
    boardMessage,
    cards
} from "./variables.js";
import {fetchDELETE} from "./Fetch/fetchDELETE.js";
import {Loader} from "./loader.js";
import {allActualCards} from "./showAllCards.js";


cards.addEventListener('click', async e => {

    if (e.target.parentElement.classList.contains('icon') || e.target.classList.contains('icon')) {

        await Loader(e.target.closest('.card-info').querySelector('.doctor-name'), 'DELETE CARD...');

        let status = await fetchDELETE(e.target.closest('.card').dataset.id);

        status === 200 && setTimeout(removeCard, 2000, e.target.closest('.card'));

        //удаление карточки из массива актуальных карт (этот блок можно вообще убрать, т.к. при удалении карточка удаляется из отрисовки (не скрывается!), т.е. карточка останется в массиве актуальных карт до перезагрузки, но в любом случае не отрисуется после удаления)
        allActualCards.forEach((elem, index) => {

            +e.target.closest('.card').dataset.id === elem.id && allActualCards.splice(index,1);

        })
    }

    const checkCard = cards.querySelector('.card');
    !checkCard && boardMessage.classList.remove('board-message-none');

})


function removeCard(card) {
    card.remove()
}