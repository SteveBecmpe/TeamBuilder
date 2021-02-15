const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // super(name);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Intern";
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

}