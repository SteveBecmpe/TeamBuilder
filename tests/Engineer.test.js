const Engineer = require("../lib/Engineer");

describe("Manager class", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email, if provide with valid information", () => {
            const engineer = new Engineer("Steve Black", 1, "steveblackecmpe@gmail.com", "SteveBecmpe");
            expect(engineer.name).toEqual("Steve Black");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("steveblackecmpe@gmail.com");
            expect(engineer.role).toEqual("Engineer");
            expect(engineer.github).toEqual("SteveBecmpe");
        });

        describe("getName", () => {
            it('should return the object "name"', () => {
                const engineer = new Engineer("Steve", 1, "steveblackecmpe@gmail.com", "SteveBecmpe");
                expect(engineer.getName()).toEqual("Steve");
            });
        });

        describe("getId", () => {
            it('should return the object "id"', () => {
                const engineer = new Engineer("Steve", 1, "steveblackecmpe@gmail.com", "SteveBecmpe");
                expect(engineer.getId()).toEqual(1);
            });
        });

        describe("getEmail", () => {
            it('should return the object "email"', () => {
                const engineer = new Engineer("Steve", 1, "steveblackecmpe@gmail.com", "SteveBecmpe");
                expect(engineer.getEmail()).toEqual("steveblackecmpe@gmail.com");
            });
        });

        describe("getRole", () => {
            it('should return the object "role"', () => {
                const engineer = new Engineer("Steve", 1, "steveblackecmpe@gmail.com", "SteveBecmpe");
                expect(engineer.getRole()).toEqual("Engineer");
            });
        });

        describe("getGithub", () => {
            it('should return the object "gitHub"', () => {
                const engineer = new Engineer("Steve", 1, "steveblackecmpe@gmail.com", "SteveBecmpe");
                expect(engineer.getGithub()).toEqual("SteveBecmpe");
            });
        });
    });
});
