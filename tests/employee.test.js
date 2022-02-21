const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe("Initialization", () => {
        it("should create an object that matches the name if provided valid arguments", () => {
            const employee = new Employee("Jake");

            expect(employee.name).toEqual("Jake");
        })
    })
});