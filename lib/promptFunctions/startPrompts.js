const promptManager = require("./promptManager");

function startPrompts(employeeList) {
    console.log("-------------------------------------");
    console.log("Welcome to the Team Profile Generator");
    console.log("-------------------------------------");
    promptManager(employeeList)
}

module.exports = startPrompts;