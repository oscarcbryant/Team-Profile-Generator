const Employee = require('./employee');

class Engineer extends Employee {
    constructor(gitHub) {
        super(Peter, 55, 'peter@email.com');
        this.gitHub = gitHub;
    }
    getGitHub() {
        return 'github';
    }

    getRole() {
        return 'Engineer'
    }
}

