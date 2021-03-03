const engineerTemplate = require("../../src/engineerTemplate")

function buildIntern(name, id, email, github) {
    let engineerCard = engineerTemplate;
    engineerCard = engineerCard.replace('{{name}}', name);
    engineerCard = engineerCard.replace('{{id}}', id);
    engineerCard = engineerCard.replace(/{{email}}/g, email);
    engineerCard = engineerCard.replace(/{{github}}/g, github);
    return engineerCard
}
console.log(buildIntern("Juan", 2, "juan@fakeemail.com", "jpecheverry"));
