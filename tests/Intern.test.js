const Intern = require("../lib/Intern");

test("should create an object with a name, id, and email, if provide with valid information", () => {
    const intern = new Intern("Steve Black", 1, "steveblackecmpe@gmail.com", "MTU");
    expect(intern.name).toEqual("Steve Black");
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual("steveblackecmpe@gmail.com");
    expect(intern.role).toEqual("Intern");
});
