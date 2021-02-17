const Engineer = require("../lib/Engineer");

test("should create an object with a name, id, and email, if provide with valid information", () => {
    const engineer = new Engineer("Steve Black", 1, "steveblackecmpe@gmail.com", "SteveBecmpe");
    expect(engineer.name).toEqual("Steve Black");
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual("steveblackecmpe@gmail.com");
    expect(engineer.role).toEqual("Engineer");
});
