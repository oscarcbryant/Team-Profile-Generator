const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe("Initialization", () => {
        it("should create an object that matches the name provided in console", () => {
            const manager = new Manager("Jake");

            expect(employee.name).toEqual("Jake");
        });
    })
});