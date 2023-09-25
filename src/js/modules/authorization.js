import {
    passwordForm,
    buttonEntry,
    buttonEntrySubmit,
    error,
    inputsEmailPassword,
    buttonCreateVisit,
    dataTestEnter
} from "./variables.js";
import { ShowAllCards } from "./showAllCards.js";
import { fetchLOGIN } from "./Fetch/fetchLOGIN.js";

let emailInput;//введенная почта
let passwordInput;//введенный пароль


buttonEntry.addEventListener('click', e => {

    passwordForm.classList.add('visible');

    buttonEntry.classList.add('deactive');
});


inputsEmailPassword.forEach(input => {

    input.addEventListener('input', e => {

        if (e.target.value !== '') {
            buttonEntrySubmit.disabled = false
        }

        if (input.getAttribute('type') === 'email') {
            emailInput = e.target.value;
        } else passwordInput = e.target.value;
    })
});


buttonEntrySubmit.addEventListener('click', async e => {

    e.preventDefault();

    globalThis.Token = await fetchLOGIN(emailInput, passwordInput);

    if (Token !== "Incorrect username or password") {
        passwordForm.classList.remove('visible');
        buttonCreateVisit.classList.remove('hidden');
        dataTestEnter.classList.add('data-enter-none');

        ShowAllCards();

    } else error.innerHTML = 'Помилка у email<br>або password!';
})


//авторизация без запросов на сервер, по заранее известной почте и паролю.

// buttonEntrySubmit.addEventListener('click', e => {
//
//     e.preventDefault();
//     //
//     //
//     // if (emailInput === '1' && passwordInput === '1') {
//     //     passwordForm.classList.remove('visible');
//     //     // buttonEntry.classList.add('deactive');
//     //     buttonCreateVisit.classList.remove('hidden');
//     //
//     //     showAllCards();
//     //
//     // } else error.innerText = 'Помилка у email або password!'
//
// })







