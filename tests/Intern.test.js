const Intern = require("../lib/Intern");

describe("Manager class", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email, if provide with valid information", () => {
            const intern = new Intern("Steve Black", 1, "steveblackecmpe@gmail.com", "MTU");
            expect(intern.name).toEqual("Steve Black");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("steveblackecmpe@gmail.com");
            expect(intern.role).toEqual("Intern");
            expect(intern.school).toEqual("MTU");
        });

        describe("getName", () => {
            it('should return the object "name"', () => {
                const intern = new Intern("Steve", 1, "steveblackecmpe@gmail.com", "MTU");
                expect(intern.getName()).toEqual("Steve");
            });
        });

        describe("getId", () => {
            it('should return the object "id"', () => {
                const intern = new Intern("Steve", 1, "steveblackecmpe@gmail.com", "MTU");
                expect(intern.getId()).toEqual(1);
            });
        });

        describe("getEmail", () => {
            it('should return the object "email"', () => {
                const intern = new Intern("Steve", 1, "steveblackecmpe@gmail.com", "MTU");
                expect(intern.getEmail()).toEqual("steveblackecmpe@gmail.com");
            });
        });

        describe("getRole", () => {
            it('should return the object "role"', () => {
                const intern = new Intern("Steve", 1, "steveblackecmpe@gmail.com", "MTU");
                expect(intern.getRole()).toEqual("Intern");
            });
        });

        describe("getSchool", () => {
            it('should return the object "school"', () => {
                const intern = new Intern("Steve", 1, "steveblackecmpe@gmail.com", "MTU");
                expect(intern.getSchool()).toEqual("MTU");
            });
        });
    });
});