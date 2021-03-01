// inquirer Library
const inquirer = require("inquirer");
// Class
const Intern = require("../Intern");
// Questions
const internQuestions = require("../inquirerQuestions/internQuestions");

async function promptIntern(employeeList) {
    console.log("We will continue with the intern information:");
    const getInternInfo = await inquirer
        .prompt(internQuestions)
        
        const {internName, id, email, school} = getInternInfo;

        employeeList.push(
            new Intern(internName, id, email, school)
        )
        console.log(employeeList);
}
module.exports = promptIntern;