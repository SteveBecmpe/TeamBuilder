const inquirer = require("inquirer");
const fs = require('fs');
// const Team = require("./lib/Team");
const GenHTML = require("./lib/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const generateHtmlfile = require("./lib/generateHTML");
const generateHtmlContent = require("./lib/Team");
const generateHtmlContentEnd = require("./lib/Team");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName + 'Test-index.html', generateHtmlfile(data), (err) =>
        err ? console.error(err) : console.log('Readme File Named ' + '"' + fileName + '-readme.md"' + ' Generated!'));
}

const teamMembers = [];

function addTeamMember(data) {
    teamMembers.push(data);
    // console.log(teamMembers);
}

function checkTeamFor(role) {
    let teamArrLength = teamMembers.length;
    console.log("arr Len " + teamArrLength);
    for (let i = 0; i < teamArrLength; i++) {
        if (teamMembers[i].getRole() === role) {
            return true;
        }
        // else {
        //     return false;
        // }
    }
    return false;
}

function checkTeamIdFor(id) {
    let teamArrLength = teamMembers.length;
    console.log("arr Len " + teamArrLength);
    for (let i = 0; i < teamArrLength; i++) {
        console.log("array ID" + teamMembers[i].getId());
        console.log("Data ID" + id);
        if (teamMembers[i].getId() === id) {
            return true;
        }
        // else {
        //     return false;
        // }
    }
    return false;
}

const ManagerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Who is the team manager?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the managers ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the managers email?',
    },
    {
        type: 'input',
        name: 'phoneNumber',
        message: 'What is the managers officeNumber?',
    },
];

const EngineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Engineers Name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Engineers ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Engineers email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the Engineers GitHub User Name?',
    },
];

const InternQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Interns Name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Interns ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Interns email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the Interns school?',
    },
];

const MenuQuestions = [
    {
        type: 'list',
        message: 'Team builder Menu: What would you like to do next',
        name: 'choice',
        choices: ['Add Manager', 'Add Engineer', 'Add intern', 'Finish, Generate Team']
    }
];

function getManager() {
    if (checkTeamFor("Manager")) {
        console.log("This team already has a Manager");
        init();
    } else {
        inquirer
            .prompt(ManagerQuestions)
            .then((data) => {
                // console.log(data);
                if (checkTeamIdFor(data.id)) {
                    console.log("This id is already in use");
                    init();
                } else {
                    let manager = new Manager(data.name, 
                        data.id, 
                        data.email, 
                        data.phoneNumber);
                    addTeamMember(manager);
                    init();
                }
            })
    }
}

function getEngineer() {
    console.log("GetEng ");
    inquirer
        .prompt(EngineerQuestions)
        .then((data) => {
            // console.log(data);
            if (checkTeamIdFor(data.id)) {
                console.log("This id is already in use");
                init();
            } else {
                let engineer = new Engineer(data.name, 
                    data.id, 
                    data.email, 
                    data.github);
                addTeamMember(engineer);
                init();
            }
        })
}

function getIntern() {
    console.log("GetIntern ");
    inquirer
        .prompt(InternQuestions)
        .then((data) => {
            // console.log(data);
            if (checkTeamIdFor(data.id)) {
                console.log("This id is already in use");
                init();
            } else {
                let intern = new Intern(data.name, data.id, data.email, data.school);
                addTeamMember(intern);
                init();
            }
        })
}

// TODO: Create a function to initialize app
function init() {
    // getManager()
    // .then(getStarted()).then(console.log(teamMembers))
    // .then(console.log(teamMembers))
    console.log(teamMembers);
    inquirer
        .prompt(MenuQuestions)
        .then((data) => {
            // console.log(data);
            // console.log(data.choice);

            switch (data.choice) {
                case 'Add Manager':
                    console.log("Yeah add a manager");
                    getManager();//(data.id)
                    break;
                case 'Add Engineer':
                    console.log("Yeah add a engineer ");
                    getEngineer();//(data.id)
                    break;
                case 'Add intern':
                    console.log("Yeah add a intern");
                    getIntern();
                    break;
                case 'Finish, Generate Team':
                    console.log("Yeah finish");
                    // generateHtmlContent(teamMembers);
                    fs.writeFile('./distributeRelease/index.html', generateHtmlContent(teamMembers), (err) =>
                        err ? console.error(err) : console.log('File  Generated!'));
                    // setTimeout(() => {
                    //     fs.appendFile('testfile.html', generateHtmlContentEnd(teamMembers), (err) =>
                    //         err ? console.error(err) : console.log('File appended Generated!'));
                    // }, 100);

                    // generateHtmlfile(teamMembers);
                    break;
                default:
                    console.log("Whoops! something went wrong, please try again");
            }

        })
}

init();