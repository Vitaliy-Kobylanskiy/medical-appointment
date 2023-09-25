
export class Visit {
        constructor( user ) {
        const { purpose, description, urgency, name } = user;
        this.purpose = purpose;
        this.description = description;
        this.urgency = urgency;
        this.name = name;
    }
}