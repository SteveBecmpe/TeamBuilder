const inquirer = require("inquirer");
// const Team = require("./lib/Team");
const GenHTML = require("./lib/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
    for (let i = 0; i < teamArrLength; i++) {
        if (teamMembers[i].getRole() === role) {
            return true;
        } else {
            return false;
        }
    }
}

function checkTeamIdFor(id) {
    let teamArrLength = teamMembers.length;
    for (let i = 0; i < teamArrLength; i++) {
        if (teamMembers[i].getId() === id) {
            return true;
        } else {
            console.log(teamMembers[i].getId());
            console.log(id);
            return false;
        }
    }
}

const ManagerQuestions = [
    {
        type: 'input',
        name: 'ManagerName',
        message: 'Who is the team manager?',
    },
    {
        type: 'input',
        name: 'ManagerID',
        message: 'What is the managers ID?',
    },
    {
        type: 'input',
        name: 'ManagerEmail',
        message: 'What is the managers email?',
    },
    {
        type: 'input',
        name: 'ManagerOfficeNumber',
        message: 'What is the managers officeNumber?',
    },
    {
        type: 'val',
        name: 'ManagerOfficeNumber',
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
        name: 'projectTitle',
        message: 'Who is the team manager?',
    }
];

const MenuQuestions = [
    {
        type: 'list',
        message: 'Team builder Menu: What would you like to do next',
        name: 'choice',
        choices: ['Add Manager', 'Add Engineer', 'Add intern', 'Finish, Generate Team']
    }
];

function getManager(id) {
    if (checkTeamFor("Manager")) {
        console.log("This team already has a Manager");
        init();
    } else if (checkTeamIdFor(id)) {
        console.log("This id is already in use");
        init();
    } else {
        inquirer
            .prompt(ManagerQuestions)
            .then((data) => {
                // console.log(data);
                let manager = new Manager(data.ManagerName, data.ManagerID, data.ManagerEmail, data.ManagerOfficeNumber);
                addTeamMember(manager);
                init();
            })
    }
}

function getEngineer(id) {
    console.log("GetEng " + id);
    if (checkTeamIdFor(id)) {
        console.log("This id is already in use");
        init();
    } else {
        inquirer
            .prompt(EngineerQuestions)
            .then((data) => {
                // console.log(data);
                let engineer = new Engineer(data.name, data.id, data.email, data.github);
                addTeamMember(engineer);
                init();
            })
    }
}

function getIntern() {
    inquirer
        .prompt(InternQuestions)
        .then((data) => {
            // console.log(data);
            // build new intern
            data.role = "Intern";
            addTeamMember(data);
            init();
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
                    getManager(data.id);
                    break;
                case 'Add Engineer':
                    console.log("Yeah add a engineer " + data.id );
                    getEngineer(data.id);
                    break;
                case 'Add intern':
                    console.log("Yeah add a intern");
                    break;
                case 'Finish, Generate Team':
                    console.log("Yeah finish");
                    break;
                default:
                    console.log("Whoops! something went wrong, please try again");
            }

        })

    // .then((data) => {// this is where the configuration needs to happen.
    //     writeToFile(data.projectTitle, data);
    // });

}

init();



// this file starts the process...


// class Employee {
//     constructor(name, id, email){
//         //add input validation
//         this.name = name;
//         this.id = id;
//         this.email = email;
//         this.emp = "Employee";
//     }

//     getName(){

//     };

//     getId(){

//     };

//     getEmail(){

//     };

//     getRole(emp){
//         return emp.role;
//     }
// }

