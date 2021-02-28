const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing a name, id, email, and school", () => {
            // Creating Parameters
            const name = "juan";
            const id = 1;
            const email = "juan@example.com";
            const school = "GA Tech";

            // Creating object
            const intern = new Intern(name, id, email, school);

            // Making sure the object is created successfully
            expect(intern.name === name);
            expect(intern.id === id);
            expect(intern.email === email);
            expect(intern.school === school);
        });
    });
    describe("Methods", () => {
        it("should return 'Intern' when you call the getRole method", () => {
            // Creating Parameters
            const name = "juan";
            const id = 1;
            const email = "juan@example.com";
            const school = "GA Tech";
            
            const expected = 'Intern';
            // Creating Object
            const intern = new Intern(name, id, email, school);

            // Calling Method
            const value = intern.getRole();
            
            // Checking if the method gave the right value
            expect(value === expected);
        });
        it("should return the schhol when you call the getSchool method", () =>{
            // Creating Parameters
            const name = "juan";
            const id = 1;
            const email = "juan@example.com";
            const school = "GA Tech";

            const intern = new Intern(name, id, email, school);

            // Calling Method
            const value = intern.getSchool();

            // Checking if the method gave the right value
            expect(value === school);
        })
    });
});