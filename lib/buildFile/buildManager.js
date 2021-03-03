const managerTemplate = require("../../src/managerTemplate")

function buildManager(name, id, email, officeNumber) {
    let managerCard = managerTemplate;
    managerCard = managerCard.replace('{{managerName}}', name);
    managerCard = managerCard.replace('{{id}}', id);
    managerCard = managerCard.replace(/{{email}}/g, email);
    managerCard = managerCard.replace('{{officeNumber}}', officeNumber);
    console.log(managerCard);
}

buildManager("Jared", 1, "jared@fakeemail.com", 1);