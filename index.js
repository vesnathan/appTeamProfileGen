const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

let nathan = new Employee("Nathan",2,"vesnathan@gmail.com");

let timmy = new Manager("11111111","Timmy",2,"timmy@gmail.com");

let alice = new Engineer("aliceGithug","Alice",2,"alice@gmail.com");

let bob = new Intern("Some School","Bob",2,"bob@gmail.com");

let questionsToAsk = [];

let mainQuestions = [{
        type:       'input',
        message:    'Name: ',
        name:       'username',
    },
    {
        type:       'input',
        message:    'Employee ID: ',
        name:       'id',
    },
    {
        type:       'input',
        message:    'Email Address: ',
        name:       'email',
    }
];


let managerQuestions = [{
    type:       'input',
    message:    'Office Number: ',
    name:       'number',
},
{
    type:       'checkbox',
    message:    'Office Number: ',
    name:       'number',   
}];
let engineerQuestions = [{
    type:       'input',
    message:    'Github Username: ',
    name:       'github',
}];
let internQuestions = [{
    type:       'input',
    message:    'School: ',
    name:       'school',
}];

function getmanagerDetails() {
    console.clear();
    console.log("MANAGER DETAILS");
    questionsToAsk = [...mainQuestions, ...managerQuestions];
    inquirer.prompt(questionsToAsk);
}
function getEngineerDetails() {
    console.clear();
    console.log("ENGINEER DETAILS");
    questionsToAsk = [...mainQuestions, ...engineerQuestions];
}
function getInternDetails() { 
    console.clear();
    console.log("INTERN DETAILS");
    questionsToAsk = [...mainQuestions, ...internQuestions];
}


getmanagerDetails();



