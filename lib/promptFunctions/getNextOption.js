// This function is used to decide if we want to create a new 
// engineer, intern or if we want to finish the prompts 

const inquirer = require("inquirer");
const promptEngineer = require("./promptEngineer");
const promptIntern = require("./promptIntern");
const buildFile = require("../buildFile/buildFile")

async function getNextOption(employeeList) {
    const getOption = await inquirer
        .prompt([
            {
                name: 'option',
                type: 'list',
                message: 'What member would you like to add next?',
                choices: [
                    'Engineer',
                    'Intern',
                    'Finish and Build File'
                ]
            }
        ])
        promptTeam(getOption.option, employeeList);
}

async function promptTeam(memberType, employeeList) {
    switch (memberType) {
        case 'Engineer':
            await promptEngineer(employeeList);
            break;
        case 'Intern':
            await promptIntern(employeeList);
            break;
        case 'Finish and Build File':
            buildFile(employeeList)
            return 0;
        default:
            break;
    }
    getNextOption(employeeList)
};

module.exports = getNextOption;