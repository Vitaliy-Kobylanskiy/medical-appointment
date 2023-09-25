import { SaveChangeInfo } from "./saveChangeInfo.js";


export function PaintChangeCard(obj, changeInfo, editBtn, card) {

    const objChange = {};//объект с измененной информацией о визите

    //    отрисовка формы для изменения информации

    const changeDiv = document.createElement('div');
    changeInfo.prepend(changeDiv);
    changeDiv.classList.add('change-div');

    for (const prop in obj) {

        if (prop !== 'id' && prop !== 'doctor') {
            const propertyDiv = document.createElement('div');
            changeDiv.append(propertyDiv);
            propertyDiv.style.display = 'flex';

            const property = document.createElement('p');
            propertyDiv.append(property);
            property.innerText = `${prop}: `;

            const changeInput = document.createElement('input');
            propertyDiv.append(changeInput);
            changeInput.name = prop;
            changeInput.value = obj[prop];

        }
    }
    const saveChange = document.createElement('button');
    changeDiv.append(saveChange);
    saveChange.classList.add('save-change');
    saveChange.innerText = 'Зберегти';

    const changeInputs = changeDiv.querySelectorAll('input');//сбор измененной инфы с инпутов

    saveChange.addEventListener('click', e => {

        objChange.id = obj.id;
        objChange.doctor = obj.doctor;

        changeInputs.forEach(elem => {

            objChange[`${elem.name}`] = elem.value;

        });

        editBtn.classList.toggle('edit-btn');
        editBtn.classList.toggle('edit-close-btn');
        changeDiv.remove();

        SaveChangeInfo(objChange, card);

    });
}



