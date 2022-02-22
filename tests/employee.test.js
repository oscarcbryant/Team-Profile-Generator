const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe("Initialization", () => {
        it("should create an object that matches the name if provided valid arguments", () => {
            const employee = new Employee("Peter");

            expect(employee.name).toEqual("Peter");
        })
        
    })

    describe("Id for constructor function", () => {
        it("should create an id that matches the name if provided valid arguments", () => {
            const employee = new Employee("Jake", 3);

            expect(employee.id).toEqual(3);
        })
    })

    describe("Id for constructor function", () => {
        it("should create an id that matches the name if provided valid arguments", () => {
            const name = new Employee("Jake");

            expect(name.getName()).toEqual("Jake");
        })
    })
    describe("Email for constructor function", () => {
        it("should create an email that matches the name if provided valid arguments", () => {
            const email = new Employee("John", 5, "name@name.com");

            expect(email.getEmail()).toEqual("name@name.com");
        })
    })
    describe("Role for constructor function", () => {
        it("should create a role that matches the name if provided valid arguments", () => {
            const role = new Employee("Sam", 9, 'email@email.com', 'Manager');

            expect(role.getRole()).toEqual(true);
        })
    })
});