//Поиск адекватно работает только по одному заполненному фильтру!

import {
    filterButton,
    filterValue,
    urgencyFilterList,
    doctorFilterList
} from "./variables.js";
import {ShowFilterCard, ResetFilter} from "./showFilterCard.js";

let filterName;//наименование фильтра
let filterUsed = '';//значение фильтра

doctorFilterList.addEventListener('click', e => {

    filterName = "doctor";
    filterUsed = e.target.value;

});

urgencyFilterList.addEventListener('click', e => {

    filterName = "urgency";
    filterUsed = e.target.value;

});


filterButton.addEventListener('click', e => {

    e.preventDefault();

    if (filterButton.classList.contains('reset-button')) {
        ResetFilter();
        filterButton.classList.remove('reset-button');
        filterButton.innerText = 'Фільтрувати';

        filterValue.forEach(elem => {
            elem.value = '';
        });
        filterName = '';
        filterUsed = '';

        doctorFilterList.value = '';
        urgencyFilterList.value = '';
    } else {
        filterValue.forEach(elem => {
            if (!!elem.value) {
                filterName = elem.name;
                filterUsed = elem.value
            }
        })

        if (filterUsed !== '') {
            ShowFilterCard(filterName, filterUsed);
            filterButton.classList.add('reset-button');
            filterButton.innerText = 'Скидання';
        }
    }
})