const Engineer = require('../lib/Intern');

describe('Engineer', () => {
    describe("Initialization", () => {
        it("should create an object that matches the name provided in console", () => {
            const engineer = new Engineer("Tobey");

            expect(engineer.name).toEqual("Tobey");
        });
    })
});