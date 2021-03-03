const managerTemplate = require("../../src/managerTemplate")

function buildManager(name, id, email, officeNumber) {
    let managerCard = managerTemplate;
    managerCard = managerCard.replace('{{managerName}}', name);
    managerCard = managerCard.replace('{{id}}', id);
    managerCard = managerCard.replace(/{{email}}/g, email);
    managerCard = managerCard.replace('{{officeNumber}}', officeNumber);
    return managerCard;
}

module.exports = buildManager