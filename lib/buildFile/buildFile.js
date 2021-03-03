const pageTemplate = require("../../src/pageTemplate");
// Functions to build Cards
const buildIntern = require("./buildIntern")
const buildEngineer = require("./buildEngineer")
const buildManager = require("./buildManager")

// fs to create the file
const fs = require('fs');

// Iterates over the array with the team info and creates a card for each employee
// It appends those cards to the cards string
// Then it inserts all the cards on the page template
// It finally creates the file
function buildFile(array) {
    let cards = ''
    let pageData = pageTemplate;
    array.forEach(employee => {
        switch (employee.getRole()) {
            case 'Manager':
                cards += buildManager(employee.name, employee.id, employee.email, employee.officeNumber);
                break;
            case 'Engineer':
                cards += buildEngineer(employee.name, employee.id, employee.email, employee.github);
                break;
            case 'Intern':
                cards += buildIntern(employee.name, employee.id, employee.email, employee.school);
                break;
            default:
                break;
        }
    });
    pageData = pageData.replace('{{{Cards}}}', cards)
    fs.writeFile('index.html', pageData, (err) =>
            err ? console.error(err) : console.log('Your File has been succesfully created!, it is called index.html')
        )
}

module.exports = buildFile;