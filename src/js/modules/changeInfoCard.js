import {cards} from "./variables.js";
import {fetchOneCardGET} from "./Fetch/fetchOneCardGET.js";
import {PaintChangeCard} from "./paintChangeCard.js";
import {Loader} from "./loader.js";


cards.addEventListener('click', async e => {

    if (e.target.classList.contains('edit-btn') || e.target.classList.contains('edit-close-btn')) {

        if (!e.target.closest('.card-info').firstChild.firstChild) {

            await Loader(e.target.closest('.card-info').querySelector('.doctor-name'), 'LOADING CARD INFO...');

            const infoChangeCard = await fetchOneCardGET(e.target.closest('.card').dataset.id);


            setTimeout(await PaintChangeCard, 2000, infoChangeCard, e.target.closest('.card-info').firstChild, e.target, e.target.closest('.card'));

            e.target.classList.toggle('edit-btn');
            e.target.classList.toggle('edit-close-btn');

        } else {

            e.target.classList.toggle('edit-btn');
            e.target.classList.toggle('edit-close-btn');

            e.target.closest('.card-info').firstChild.firstChild.remove();

        }
    }
})
