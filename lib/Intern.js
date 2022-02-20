const Employee = require('./Employee');

class Intern extends Employee {
    constructor (school) {
        super (Jake, 80, 'jake@email.com');
        this.school = school;

    }

    getSchool() {
        return 'school'
    }

    getRole() {
        return 'Intern'
    }
}
