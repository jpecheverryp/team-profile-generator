const internTemplate = require("../../src/internTemplate")

function buildIntern(name, id, email, school) {
    let internCard = internTemplate;
    internCard = internCard.replace('{{name}}', name);
    internCard = internCard.replace('{{id}}', id);
    internCard = internCard.replace(/{{email}}/g, email);
    internCard = internCard.replace('{{school}}', school);
    return internCard
}

module.exports = buildIntern;
