const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, number) {
        super(name, id, email);
        this.number = officeNumber;

    }
    getRole() {
        return 'Manager';
    }
}

