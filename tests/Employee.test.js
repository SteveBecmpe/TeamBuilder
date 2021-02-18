const Employee = require('../lib/Employee');
const { test, expect } = require("@jest/globals");

describe("Employee class", () => {//was describe
    describe("Initialization", () => {
        it("should create an object with a name, id, and email, if provide with valid information", () => {
            const employee = new Employee("Steve Black", 1, "steveblackecmpe@gmail.com");
            expect(employee.name).toEqual("Steve Black");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("steveblackecmpe@gmail.com");
            expect(employee.role).toEqual("Employee");
        });

        describe("getName", () => {
            it('should return the object "name"', () => {
                const employee = new Employee("Steve", 1, "steveblackecmpe@gmail.com");
                expect(employee.getName()).toEqual("Steve");
            });
        });

        describe("getId", () => {
            it('should return the object "id"', () => {
                const employee = new Employee("Steve", 1, "steveblackecmpe@gmail.com");
                expect(employee.getId()).toEqual(1);
            });
        });

        describe("getEmail", () => {
            it('should return the object "email"', () => {
                const employee = new Employee("Steve", 1, "steveblackecmpe@gmail.com");
                expect(employee.getEmail()).toEqual("steveblackecmpe@gmail.com");
            });
        });

        describe("getRole", () => {
            it('should return the object "role"', () => {
                const employee = new Employee("Steve", 1, "steveblackecmpe@gmail.com");
                expect(employee.getRole()).toEqual("Employee");
            });
        });
    });
});