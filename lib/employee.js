class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id
    }
    getEmail() {
        return 'email'
    }

    getRole() {
        return ('Manager', 'Engineer', 'Intern');
    }
}

module.exports = Employee;