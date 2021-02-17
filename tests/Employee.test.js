const Employee = require('../lib/Employee');
const {test, expect } = require("@jest/globals");

test("should create an object with a name, id, and email, if provide with valid information", () => {
    const employee = new Employee("Steve Black", 1, "steveblackecmpe@gmail.com");
    expect(employee.name).toEqual("Steve Black");
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual("steveblackecmpe@gmail.com");
    expect(employee.role).toEqual("Employee");
});

// test()