// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
        name: 'manager',
        message: 'What is your name?'
    },

    {   
        type: 'input',
        name: 'manager-id',
        message: "Whats is your employee ID?",
    },
    {
        type: 'input',
        name: 'manager-email',
        message: "what is your email address?",
    },
    {
        type: 'input',
        name: 'manager-number',
        message: "Whats is your office number?",

    },

    ])
    .then(answers => data.push(answers))
    .then(() => promptChoice())
}

const promptEngineer = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'engineer',
        message: 'What is your engineers name?'
    },
    {   
        type: 'input',
        name: 'engineer-id',
        message: "Whats is your engineers employee ID?",
    },
    {
        type: 'input',
        name: 'engineer-email',
        message: "what is your engineers email address?",
    },
    {
        type: 'input',
        name: 'engineer-github',
        message: "Whats is your engineers github account?",
    },

   // promptChoice()

    ])    
    .then(answers => data.push(answers))
    .then(() => promptChoice())
}

const promptIntern = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'intern',
        message: 'What is your interns name?'
    },
    {   
        type: 'input',
        name: 'intern-id',
        message: "Whats is your interns employee ID?",
    },
    {
        type: 'input',
        name: 'intern-email',
        message: "what is your engineers email address?",
    },
    {
        type: 'input',
        name: 'intern-school',
        message: "Whats school did your engineer attend?",
    },
    ])
    .then(answers => data.push(answers))
    .then(() => promptChoice())
}


const generateHTML = (answers) => {
    console.log(answers);

    //if (promptChoice(choices, "Finish building my team")) 
    //[{},{}] loop thru array
    //function return `${data} html`
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <link rel="stylesheet" href="style.css">
    <body>
        <div id="heading">
        <header id ="heading-text">My team</header>
        </div>
        <main>
            <div id="card-display">
                <div id="card">
                    <div id="top">
                        <h3>${manager}</h3>
                        <h3>Manager</h3>
                    </div>
                    <div id="details">
                        <div id = "table">
                            <h5 id="id">ID: ${manager-id}</h4>
                            <h5 id="email">Email: ${manager-email}</h4>
                            <h5 id="office-number">Office number: ${manager-number}</h4>
                        </div>
                    </div>
                </div>
                <div id="card">
                    <div id="top">
                        <h3>${engineer}</h3>
                        <h3>Engineer</h3>
                    </div>
                    <div id="details">
                        <div id = "table">
                            <h5 id="id">ID: ${engineers-id}</h4>
                            <h5 id="email">Email: ${engineer-email}</h4>
                            <h5 id="git-hub">GitHub: ${engineer-github}</h4>
                        </div>
                    </div>
                </div>
                <div id="card">
                    <div id="top">
                        <h3>${intern}</h3>
                        <h3>Intern</h3>
                    </div>
                    <div id="details">
                        <div id = "table">
                            <h5 id="id">ID: ${intern-id}</h4>
                            <h5 id="email">Email: ${intern-email}</h4>
                            <h5 id="school">School: ${intern-school}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </body>
    </html>`
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