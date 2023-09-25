import { cards } from "./variables.js";


cards.addEventListener('click', e => {

    if (e.target.classList.contains('show-more-btn') || e.target.classList.contains('show-less-btn')) {

        e.target.closest('.card-info').querySelector('.extra-info').classList.toggle('visible');

        e.target.classList.toggle('show-less-btn');
        e.target.classList.toggle('show-more-btn');

    }
});
