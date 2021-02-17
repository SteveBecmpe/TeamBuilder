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

        // it("should throw an error if no data is provided", () => {
        //     const employee = new Employee();
        //     // expect(employee).toThrowError("No data provided");
        //     expect(employee.name).toThrowError("No data provided");
        //     expect(employee.id).toThrowError("No data provided");
        //     expect(employee.email).toThrowError("No data provided");
        // });

        //     it("should throw an error if name is not provided", () => {
        //         const employee = new Employee("", 1, "steveblackecmpe@gmail.com");
        //         expect(employee).toThrowError("No Name data provided");
        //     });

        //     it("should throw an error if no ID is provided", () => {
        //         const employee = new Employee("Steve", "", "steveblackecmpe@gmail.com");
        //         expect(employee).toThrowError("No ID data provided");
        //     });

        //     it("should throw an error if ID is a string", () => {
        //         const employee = new Employee("Steve", "1", "steveblackecmpe@gmail.com");
        //         expect(employee).toThrowError("ID provided is NOT a number");
        //     });

        //     it("should throw an error if a negative ID is provided", () => {
        //         const employee = new Employee("Steve", -1, "steveblackecmpe@gmail.com");
        //         expect(employee).toThrowError("Negative number provided as ID");
        //     });

        //     it("should throw an error if no ID is provided", () => {
        //         const employee = new Employee("Steve", "", "steveblackecmpe@gmail.com");
        //         expect(employee).toThrowError("No ID data provided");
        //     });
        // });

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
                expect(employee.getEmail()).toEqual("steveblackecmpe@gmail.com");
            });
        });

        // test("should create an object with a name, id, and email, if provide with valid information", () => {
        //     const employee = new Employee("Steve Black", 1, "steveblackecmpe@gmail.com");
        //     expect(employee.name).toEqual("Steve Black");
        //     expect(employee.id).toEqual(1);
        //     expect(employee.email).toEqual("steveblackecmpe@gmail.com");
        //     expect(employee.role).toEqual("Employee");
        // });

        // // test();

    });
});