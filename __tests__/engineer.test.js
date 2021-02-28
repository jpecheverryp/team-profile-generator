const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing a name, id, email, and github", () => {
            // Creating Parameters
            const name = "juan";
            const id = 1;
            const email = "juan@example.com";
            const github = "jpecheverryp";

            // Creating object
            const engineer = new Engineer(name, id, email, github);

            // Making sure the object is created successfully
            expect(engineer.name === name);
            expect(engineer.id === id);
            expect(engineer.email === email);
            expect(engineer.github === github);
        });
    });
    describe("Methods", () => {
        it("should return 'Engineer' when you call the getRole method", () => {
            // Creating Parameters
            const name = "juan";
            const id = 1;
            const email = "juan@example.com";
            const github = "jpecheverryp";
            
            const expected = 'Engineer';
            // Creating Object
            const engineer = new Engineer(name, id, email, github);

            // Calling Method
            const value = engineer.getRole();
            
            // Checking if the method gave the right value
            expect(value === expected);
        })
    })
});