const { it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a name, an id, and an email", () => {
            // Creating parameters
            const name = 'juan';
            const id = 1;
            const email = 'juan@example.com';

            // Creating object
            const employee = new Employee(name, id, email);

            //making sure the object has the right parameters
            expect(employee.name === name);
            expect(employee.id === id);
            expect(employee.email === email);
        });
    });
    describe("Methods", () => {
        it("should return the name of the object when you call the method getName", () => {
            // Creating Parameters
            const name = 'juan';
            const id = 1;
            const email = 'juan@example.com';

            // Creating Object
            const employee = new Employee(name, id, email);

            // Calling the method
            const value = employee.getName();

            // Checking if the method gave back the correct value
            expect(name === value);
        });
        it("should return the id of the object when you call the method getId", () => {
            // Creating Parameters
            const name = 'juan';
            const id = 1;
            const email = 'juan@example.com';

            // Creating Object
            const employee = new Employee(name, id, email);

            // Calling the method
            const value = employee.getId();

            // Checking if the method gave back the correct value
            expect(id === value);
        });
        it("should return the email of the object when you call the method getEmail", () => {
            // Creating Parameters
            const name = 'juan';
            const id = 1;
            const email = 'juan@example.com';

            // Creating Object
            const employee = new Employee(name, id, email);

            // Calling the method
            const value = employee.getEmail();

            // Checking if the method gave back the correct value
            expect(email === value);
        });
        it("should return 'Employee' when you call the method getRole", () =>{
            // Creating Parameters
            const name = 'juan';
            const id = 1;
            const email = 'juan@example.com';

            // Creating Object
            const employee = new Employee(name, id, email);

            // Calling method
            const value = employee.getRole();

            // Checknig if the method gave the correct value
            expect(value === 'Employee');
        });
    });
});