import {Visit} from "./Visit.js";

export class VisitTherapist extends Visit {
    constructor(user) {
        super (user);
        const { age, doctor } = user;
        this.age = age;
        this.doctor = doctor;
    };
}