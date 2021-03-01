// inquirer Library
const inquirer = require("inquirer");
// Class
const Engineer = require("../Engineer");
// Questions
const engineerQuestions = require("../inquirerQuestions/engineerQuestions");

async function promptEngineer(employeeList) {
    console.log("We will continue with the engineer information:");

    const getEngineerInfo = await inquirer
        .prompt(engineerQuestions)
    
    // Deconstructing object
        const {engineerName, id, email, github} = getEngineerInfo;

        employeeList.push(
            new Engineer(engineerName, id, email, github)
        )
        console.log('Engineer Info Taken');
}

module.exports = promptEngineer;