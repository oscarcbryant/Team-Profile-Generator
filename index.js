// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Cards = require('./src/helper');
// const employee = require('./employee.js');

let data = [];

// Below is the array of questions for user input
const promptChoice = () => {
    return inquirer.prompt ([
    {
        type: 'list',
        name: 'addons',
        message: "Would you like to...",
        choices: ["Add Engineer", "Add Intern", "Finish building my team"]
    }
]).then(answer => {
    switch (answer.addons) {
        case 'Add Engineer':
            promptEngineer()
            break;
        case "Add Intern":
          promptIntern()
          break;
        case "Finish building my team":
           generateHTML(data)
           //.then((html) => fs.writeFileSync())
          break;

      }
})
}

const promptManager = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },

    {   
        type: 'input',
        name: 'id',
        message: "Whats is your employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "what is your email address?",
    },
    {
        type: 'input',
        name: 'number',
        message: "Whats is your office number?",

    },

    ])
    .then(answers => data.push(new Manager(answers.name, answers.id, answers.email, answers.number)))
    .then(() => promptChoice())
}

const promptEngineer = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your engineers name?'
    },
    {   
        type: 'input',
        name: 'id',
        message: "Whats is your engineers employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "what is your engineers email address?",
    },
    {
        type: 'input',
        name: 'github',
        message: "Whats is your engineers github account?",
    },

   // promptChoice()

    ])    
    .then(answers => data.push(new Engineer (answers.name, answers.id, answers.email, answers.github)))
    .then(() => promptChoice())
}

const promptIntern = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your interns name?'
    },
    {   
        type: 'input',
        name: 'id',
        message: "Whats is your interns employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "what is your engineers email address?",
    },
    {
        type: 'input',
        name: 'school',
        message: "Whats school did your engineer attend?",
    },
    ])
    .then(answers => data.push(new Intern (answers.name, answers.id, answers.email, answers.school)))
    .then(() => promptChoice())
}


const generateHTML = (answers) => {
    console.log(answers);

    //[{},{}] loop thru array
    //function return `${data} html`
    return generateCards(answers);
}


// Function to call HTML
const init = () => {
    promptManager()
    .then((answers) => {
        // console.log(answers)
        // fs.writeFileSync()
    })

}
// Function call to initialize app
init();
// promptManager();