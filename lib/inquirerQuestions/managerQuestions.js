const managerQuestions = [
    {
        name: "managerName",
        type: "input",
        message: "What is your name / Manager name?",
        default: 'Manager Name'
    },
    {
        name: "id",
        type: "input",
        message: "What is your id number?",
        default: 1
    },
    {
        name: "email",
        type: "input",
        message: "What is your email?",
        default: "manager@example.com"
    },
    {
        name: "officeNumber",
        type: "input",
        message: "What is your office number?",
        default: 624
    }
];

module.exports = managerQuestions;