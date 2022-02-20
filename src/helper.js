const generateCards = (answers) => {

htmlStarter = [`!DOCTYPE html>
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
    <main>` + generateManagerCard() + generateEngineerCard() + generateInternCard()
    `</main>
    </body>
    </html>
    `]

    const generateManagerCard = () => {

    [`<div id="card-display">
            <div id="card">
                <div id="top">
                    <h3>${answers.name}</h3>
                    <h3>Manager</h3>
                </div>
                <div id="details">
                    <div id = "table">
                        <h5 id="id">ID: ${id}</h4>
                        <h5 id="email">Email: ${email}</h4>
                        <h5 id="office-number">Office number: ${number}</h4>
                    </div>
                </div>
            </div>`];
        
    },

    const generateEngineerCard = () => {
            [`<div id="card">
                <div id="top">
                    <h3>${engineer}</h3>
                    <h3>Engineer</h3>
                </div>
                <div id="details">
                    <div id = "table">
                        <h5 id="id">ID: ${id}</h4>
                        <h5 id="email">Email: ${email}</h4>
                        <h5 id="git-hub">GitHub: ${github}</h4>
                    </div>
                </div>
            </div>`]
    },
            
            const generateInternCard = () => {
                    [`<div id="card">
                        <div id="top">
                            <h3>${intern}</h3>
                            <h3>Intern</h3>
                        </div>
                        <div id="details">
                            <div id = "table">
                                <h5 id="id">ID: ${id}</h4>
                                <h5 id="email">Email: ${email}</h4>
                                <h5 id="school">School: ${school}</h4>
                            </div>
                        </div>
                    </div>
                </div>`
            ]

            }
}
