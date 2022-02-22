// Packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateCards = require('./src/helper');

let data = [];

// Questions we are asking from the terminal. 
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
           let htmlString = generateHTML(data)
           fs.writeFileSync('./dist/index.html', htmlString)
          break;

      }
})
}
// Prompting Manager questions
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

// Prompting engineer questions
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


    ])    
    .then(answers => data.push(new Engineer (answers.name, answers.id, answers.email, answers.github)))
    .then(() => promptChoice())
}

// Prompting intern questions
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

// function that generates out HTML file, using the contents from (../helper.js)
const generateHTML = (answers) => {
    console.log(answers);

 
    return generateCards(answers);
    
}



const init = () => {
    promptManager()
    .then((answers) => {
    })

}
init();
