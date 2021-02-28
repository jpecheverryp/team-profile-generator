const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing a name, id, email, and officeNumber", () => {
            // Creating Parameters
            const name = "juan";
            const id = 1;
            const email = "juan@example.com";
            const officeNumber = 624;

            // Creating object
            const manager = new Manager(name, id, email, officeNumber);

            // Making sure the object is created successfully
            expect(manager.name === name);
            expect(manager.id === id);
            expect(manager.email === email);
            expect(manager.officeNumber === officeNumber);
        });
    });
    describe("Methods", () => {
        it("should return 'Manager' when you call the getRole method", () => {
            // Creating Parameters
            const name = "juan";
            const id = 1;
            const email = "juan@example.com";
            const officeNumber = 624;
            
            const expected = 'Manager';
            // Creating Object
            const manager = new Manager(name, id, email, officeNumber);

            // Calling Method
            const value = manager.getRole();
            
            // Checking if the method gave the right value
            expect(value === expected);
        })
    })
});