
export async function fetchPUT(obj) {

    try {
        const queryPUT = await fetch(`https://ajax.test-danit.com/api/v2/cards/${obj.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            },
            body: JSON.stringify(obj)
        });

        const queryJSON = await queryPUT.json();

        return queryJSON;

    } catch (error) {
        console.error('Виникла проблема з Вашим fetch-запросом: ' + error);
    }

}
