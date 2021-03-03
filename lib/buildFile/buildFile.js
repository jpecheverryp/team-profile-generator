function buildFile(array){
    array.forEach(employee => {
        switch (employee.getRole()) {
            case 'Manager':
                console.log("Manager");
                break;
            case 'Engineer':
                console.log("Engineer");
                break;
            case 'Intern':
                console.log("Intern");
                break;
            default:
                break;
        }
        console.log(employee);
    });
}

module.exports = buildFile;