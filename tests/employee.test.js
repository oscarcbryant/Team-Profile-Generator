const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe("Initialization", () => {
        it("should create an object that matches the name if provided valid arguments", () => {
            const employee = new Employee("Jake");

            expect(employee.name).toEqual("Jake");
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
});