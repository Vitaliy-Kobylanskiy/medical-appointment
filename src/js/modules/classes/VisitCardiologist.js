import {Visit} from "./Visit.js";

export class VisitCardiologist extends Visit {
    constructor(user) {
        super (user);
        const { pressure, index, disease, age, doctor } = user;
        this.pressure = pressure;
        this.index = index;
        this.disease = disease;
        this.age = age;
        this.doctor = doctor;
    };
}