// Modules
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const managerQuestions = require("./lib/inquirerQuestions/managerQuestions");
const engineerQuestions = require("./lib/inquirerQuestions/engineerQuestions")

function promptManager() {
    console.log("We will start with the manager of the Team:");
    inquirer
        .prompt(managerQuestions)
        .then(answers => {
            // Use answers to create a new manager object and insert it into the employees array
            employeeList.push(
                new Manager(answers.managerName, answers.id, answers.email, answers.officeNumber)
            );
            console.log('Manager Done, here is the list: ');
            console.log(employeeList);
            getNextOption()
        })
        .catch(err => {
            console.log(err);
        });
}

function promptEngineer() {
    console.log("We will continue with the engineer information");
    inquirer
        .prompt(engineerQuestions)
        .then(answers => {
            employeeList.push(
                new Engineer(answers.engineerName, answers.id, answers.email, answers.github)
            )
            console.log(employeeList);
            getNextOption()
        })
        .catch(err => {
            console.log(err);
        })
}

const employeeList = [];

function getNextOption() {
    inquirer
        .prompt([
            {
                name: 'option',
                type: 'list',
                message: 'What member next?',
                choices: [
                    'Engineer',
                    'Intern',
                    'Finish'
                ]
            }
        ])
        .then(answers => promptTeam(answers.option))
}

function promptTeam(memberType) {
    switch (memberType) {
        case 'Manager':
            promptManager();
            break;
        case 'Engineer':
            promptEngineer();
            break;
        case 'Intern':
            console.log('And this is an intern');
            break;
        case 'Finish':
            console.log("done");
            break;
        default:
            break;
    }
}



console.log("-------------------------------------");
console.log("Welcome to the Team Profile Generator");
console.log("-------------------------------------");

promptTeam('Manager');