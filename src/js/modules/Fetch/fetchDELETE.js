// import {Token} from "../variables.js";

export async function fetchDELETE(id) {

    try {
        const queryDelete = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${Token}`
            },
        });

        return queryDelete.status;

    } catch (error) {
        console.error('Виникла проблема з Вашим fetch-запросом: ' + error);
    }

}