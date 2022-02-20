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

    generateManagerCard = (manager) => {

    [`<div id="card-display">
            <div id="card">
                <div id="top">
                    <h3>${manager.getName()}</h3>
                    <h3>${manager.getRole()}</h3>
                </div>
                <div id="details">
                    <div id = "table">
                        <h5 id="id">ID: ${manager.getId()}</h4>
                        <h5 id="email">Email: ${manager.getEmail()}</h4>
                        <h5 id="office-number">Office number: ${manager.number}</h4>
                    </div>
                </div>
            </div>`];
        
    },

    generateEngineerCard = (engineerArray) => {
            [`<div id="card">
                <div id="top">
                    <h3>${engineerArray.getName()}</h3>
                    <h3>Engineer</h3>
                </div>
                <div id="details">
                    <div id = "table">
                        <h5 id="id">ID: ${engineerArray.getId()}</h4>
                        <h5 id="email">Email: ${engineerArray.getEmail()}</h4>
                        <h5 id="git-hub">GitHub: ${engineerArray.github}</h4>
                    </div>
                </div>
            </div>`]
    },
            
    generateInternCard = (internArray) => {
                    [`<div id="card">
                        <div id="top">
                            <h3>${internArray.getName()}</h3>
                            <h3>${internArray.getRole()}</h3>
                        </div>
                        <div id="details">
                            <div id = "table">
                                <h5 id="id">ID: ${internArray.getId()}</h4>
                                <h5 id="email">Email: ${internArray.getEmail()}</h4>
                                <h5 id="school">School: ${internArray.school}</h4>
                            </div>
                        </div>
                    </div>
                </div>`
            ]

            }
}
