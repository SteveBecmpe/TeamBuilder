const fs = require('fs');
const inquirer = require("inquirer");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

//this file actually does all the work, the rest are support files

function generateHtmlContent(teamArr) {
    let tempHTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Statics TeamBuilder</title>
    </head>
    
    <body>
        <h1>My Team!</h1>
        <div class="Divmain">
    `;

    let endHTML = `</div>
    </body>
    </html>`;

    let teamArrayLength = teamArr.length;
    for (let i = 0; i < teamArrayLength; i++) {
        switch (teamArr[i].role) {
            case 'Manager':
                let manHTML = ` <div class="Divcard">
                <h2 class="HeadSub"> ${teamArr[i].name} </h2>
                <h3 class="HeadSubSub"> Manager </h3>
                <div class="DivSub">
                    ID: ${teamArr[i].id}
                </div>
                <div class="DivSubEmail">
                    Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a>
                </div>
                <div class="DivSubEmail"> Office Number: ${teamArr[i].phoneNum}</div>
                </div>`;
                tempHTML += manHTML;
                break;
            case 'Engineer':
                let engHTML = `<div class="Divcard">
                <h2 class="HeadSub"> ${teamArr[i].name} </h2>
                <h3 class="HeadSubSub"> Engineer </h3>
                <div class="DivSub">
                    ID: ${teamArr[i].id}
                </div>
                <div class="DivSubEmail">
                    Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a>
                </div>
                <div class="DivSub"> GitHub:<a href="https://github.com/${teamArr[i].github}">${teamArr[i].github}</a></div>
                </div>`;
                tempHTML += engHTML;
                break;
            case 'Intern':
                let intHTML = `<div class="Divcard">
                <h2 class="HeadSub"> ${teamArr[i].name} </h2>
                <h3 class="HeadSubSub"> Intern </h3>
                <div class="DivSub">
                    ID: ${teamArr[i].id}
                </div>
                <div class="DivSubEmail">
                    Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a>
                </div>
                <div class="DivSub"> School: ${teamArr[i].school}</div>
                 </div>`
                tempHTML += intHTML;
                break;
            default:
                console.log("Whoops! something went wrong in RENDER, please try again");
        }
    }

    tempHTML += endHTML;

    return tempHTML;



    // return `<!DOCTYPE html>
    // <html lang="en">

    // <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <link rel="stylesheet" href="./style.css">
    //     <title>Statics TeamBuilder</title>
    // </head>

    // <body>
    //     <h1>My Team!</h1>
    //     <div class="Divmain">
    // `
}

function generateHtmlContentEnd(teamArr) {
    return `</div>
    </body>
    </html>`
}

//this file has the questions in it. 
function generateHtmlfile(teamArr) {
    fs.writeFile("Team-Index.html", `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Statics TeamBuilder</title>
    </head>
    
    <body>
        <h1>My Team!</h1>
        <div class="Divmain">
    `);

    // fs.appendFile('./distributeRelease/Team-Index.html',
    //     `</div>
    // </body>
    // </html>
    // `);
};

module.exports = generateHtmlContent;
