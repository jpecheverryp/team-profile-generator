// Inquirer Library
const inquirer = require("inquirer");
// Class
const Manager = require("../Manager");
// Functions
const getNextOption = require("./getNextOption");
// Questions
const managerQuestions = require("../inquirerQuestions/managerQuestions");

function promptManager(employeeList) {
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
            getNextOption(employeeList);
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = promptManager;