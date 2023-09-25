import {
    buttonCreateVisit,
    visitForm,
    doctor,
    visitFormInfo,
    visitInfoValue,
    buttonCreate,
    buttonClose,
    boardMessage,
    objInfoVisit,
    urgencySelectList,
} from "./variables.js";

import {
    createVisitCardiologist,
    createVisitDentist,
    createVisitTherapist
} from "./createNewCard.js";


let doctorSelect;//выбранный доктор

buttonCreateVisit.addEventListener('click', e => {

    visitForm.classList.add('visible');
    buttonCreateVisit.classList.add('hidden');

});


doctor.addEventListener('click', e => {

    doctorSelect = e.target.value;

    if (!!doctorSelect) {
        visitFormInfo.classList.add('visible');

        visitInfoValue.forEach(elem => {

            elem.style.display = 'flex';
            if (!!elem.dataset.extra) {

                (elem.dataset.extra !== doctorSelect) && (elem.style.display = 'none');

            }
        })
    }
});


buttonClose.addEventListener('click', e => {

    e.preventDefault();

    visitForm.classList.remove('visible');
    visitFormInfo.classList.remove('visible');
    buttonCreateVisit.classList.remove('hidden');
    visitInfoValue.forEach(elem => {
        elem.value = '';
    })

});

//выбор срочности из дропдауна при создании визита
urgencySelectList.addEventListener('click', e => {

    objInfoVisit.urgency = e.target.value;

});


buttonCreate.addEventListener('click', e => {

    e.preventDefault();

    objInfoVisit.doctor = doctorSelect;

    visitInfoValue.forEach(elem => {

        if (!!elem.value) {
            objInfoVisit[`${elem.name}`] = elem.value
        }

    });

    (doctorSelect === 'dentist' && createVisitDentist(objInfoVisit)) || (doctorSelect === 'therapist' && createVisitTherapist(objInfoVisit)) || (doctorSelect === 'cardiologist' && createVisitCardiologist(objInfoVisit))

    visitForm.classList.remove('visible');
    buttonCreateVisit.classList.remove('hidden');
    visitFormInfo.classList.remove('visible');

    boardMessage.classList.add('board-message-none');

    visitInfoValue.forEach(elem => {
        elem.value = '';
    });
});
