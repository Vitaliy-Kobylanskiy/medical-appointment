import {cards} from "./variables.js";
import {VisitDentist} from "./classes/VisitDentist.js";
import {VisitTherapist} from "./classes/VisitTherapist.js";
import {VisitCardiologist} from "./classes/VisitCardiologist.js";
import {fetchPOST} from "./Fetch/fetchPOST.js";
import {PaintCard} from "./paintCard.js";
import {Loader} from "./loader.js";


export async function createVisitDentist(obj) {

    const visitDentist = new VisitDentist(obj);

    await Loader(cards, 'CREATE CARD...');

    visitDentist.id = await fetchPOST(visitDentist);

    setTimeout(await PaintCard, 2000, visitDentist);

}


export async function createVisitTherapist(obj) {

    const visitTherapist = new VisitTherapist(obj);

    await Loader(cards, 'CREATE CARD...');

    visitTherapist.id = await fetchPOST(visitTherapist);

    setTimeout(await PaintCard, 2000, visitTherapist);

}


export async function createVisitCardiologist(obj) {

    const visitCardiologist = new VisitCardiologist(obj);

    await Loader(cards, 'CREATE CARD...');

    visitCardiologist.id = await fetchPOST(visitCardiologist);

    setTimeout(await PaintCard, 2000, visitCardiologist);

}