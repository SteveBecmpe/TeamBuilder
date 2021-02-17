const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, phoneNum) {
        super(name, id, email);
        this.role = "Manager";
        this.phoneNum = phoneNum;
    }

    getPhoneNum() {
        return this.phoneNum;
    }
}

module.exports = Manager;