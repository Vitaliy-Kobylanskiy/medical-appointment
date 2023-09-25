import {Visit} from "./Visit.js";

export class VisitDentist extends Visit {
    constructor(user) {
        super (user);
        const {data, doctor} = user;
        this.data = data;
        this.doctor = doctor;
    };
}