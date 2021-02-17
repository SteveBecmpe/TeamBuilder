const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email, if provide with valid information", () => {
            const manager = new Manager("Steve Black", 1, "steveblackecmpe@gmail.com", "231.629.2266");
            expect(manager.name).toEqual("Steve Black");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("steveblackecmpe@gmail.com");
            expect(manager.role).toEqual("Manager");
            expect(manager.phoneNum).toEqual("231.629.2266");
        });

        describe("getName", () => {
            it('should return the object "name"', () => {
                const manager = new Manager("Steve", 1, "steveblackecmpe@gmail.com");
                expect(manager.getName()).toEqual("Steve");
            });
        });

        describe("getId", () => {
            it('should return the object "id"', () => {
                const manager = new Manager("Steve", 1, "steveblackecmpe@gmail.com");
                expect(manager.getId()).toEqual(1);
            });
        });

        describe("getEmail", () => {
            it('should return the object "email"', () => {
                const manager = new Manager("Steve", 1, "steveblackecmpe@gmail.com");
                expect(manager.getEmail()).toEqual("steveblackecmpe@gmail.com");
            });
        });

        describe("getRole", () => {
            it('should return the object "role"', () => {
                const manager = new Manager("Steve", 1, "steveblackecmpe@gmail.com");
                expect(manager.getRole()).toEqual("Manager");
            });
        });
    });
});