const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe("Initialization", () => {
        it("should create an object that matches the name provided in console", () => {
            const intern = new Intern("Peter");

            expect(intern.name).toEqual("Peter");
        });
    })
});
