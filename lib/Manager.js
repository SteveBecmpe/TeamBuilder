const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, phoneNum) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Manager";
        this.phoneNum = phoneNum;
    }

    getPhoneNum() {
        return this.phoneNum;
    }
}