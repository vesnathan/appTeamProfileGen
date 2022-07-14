const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const mainHtml = require("./src/template.js");
const Renderer = require("./dist/render.js");
const inquirer = require("inquirer");
const { getConsoleOutput } = require("@jest/console");


let questionsToAsk = [];

let mainQuestions = [{
        type:       'input',
        message:    'Name: ',
        name:       'name',
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

let myEmployees = [];

let data = [];

function printPage() {
    console.clear();
    console.log("EXIT");
    inquirer.prompt({
        type:       'list',
        message:    'Viw Page: ',
        name:       'print',
        choices: ['Yes', 'No']
    })
    .then((response) => {
        switch (response.print) {
            case "Yes":
                let myPageRender = new Renderer();
                myPageRender.setMainHtml(mainHtml);
                myPageRender.setFileName("./employees.html");
                myEmployees.forEach((employee) => {
                    myPageRender.addCard(employee);
                });
                myPageRender.render();
                break;
            case "No":            
                console.log(myEmployees);
                break;
            default:
                printPage();
            break;
        }
    });
}
function getmanagerDetails() {
    let managerQuestions = [{
        type:       'input',
        message:    'Office Number: ',
        name:       'number',
    }];
    console.clear();
    console.log("MANAGER DETAILS");
    questionsToAsk = [...mainQuestions, ...managerQuestions];
    inquirer.prompt(questionsToAsk).then((response) => {
        myEmployees.push(new Manager(response.number,response.name,response.id,response.email)); 
        menu();
    });

}
function menu() {
    let menuQuestions = [{ 
        type: "checkbox", 
        name: "type",         
        message: "Add Employee Type or EXIT:", 
        choices: [
            { name:"Intern", value: "intern"},
            { name:"Engineer", value: "engineer"},
            { name:"EXIT", value: "exit"}
        ]
    }];
    console.clear();
    console.log("MAIN MENU");
    inquirer.prompt(...menuQuestions).then((response) => { 
        data.push(response);
        switch (response.type[0]) {
            case "intern":
                getInternDetails();
                break;
            case "engineer":
                getEngineerDetails();
                break;
            case "exit":
                printPage();
                break;
            default: 
                menu();
                return;
            break;
        }  
    });
}
function getEngineerDetails() {
    let engineerQuestions = [{
        type:       'input',
        message:    'Github Username: ',
        name:       'github',
    }];
    console.clear();
    console.log("ENGINEER DETAILS");
    questionsToAsk = [...mainQuestions, ...engineerQuestions];
    inquirer.prompt(questionsToAsk).then((response) => {   
        myEmployees.push(new Engineer(response.github,response.name,response.id,response.email));
        menu();
    });
}
function getInternDetails() {    
    let internQuestions = [{
        type:       'input',
        message:    'School: ',
        name:       'school',
    }];
    console.clear();
    console.log("INTERN DETAILS");
    questionsToAsk = [...mainQuestions, ...internQuestions];
    inquirer.prompt(questionsToAsk).then((response) => {
        myEmployees.push(new Intern(response.school,response.name,response.id,response.email));
        menu();
    });
}


getmanagerDetails();




