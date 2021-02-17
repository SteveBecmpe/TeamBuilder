const Manager = require("../lib/Manager");

test("should create an object with a name, id, and email, if provide with valid information", () => {
    const manager = new Manager("Steve Black", 1, "steveblackecmpe@gmail.com", "231.629.2266");
    expect(manager.name).toEqual("Steve Black");
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual("steveblackecmpe@gmail.com");
    expect(manager.role).toEqual("Manager");
});
