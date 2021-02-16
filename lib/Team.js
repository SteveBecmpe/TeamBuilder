const inquirer = require("inquirer");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

//this file actually does all the work, the rest are support files

//this file has the questions in it. 
const questions = [
    {
        type: 'input',
        name: 'EngineerName',
        message: 'What is the Engineers name?',
    }
];

const ManagerQuestions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the Project Title, use - instead of spaces?',
    }
];

module.exports = { questions, ManagerQuestions};
