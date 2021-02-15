
class Employee {
    constructor(name, id, email) {
        //add input validation
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;

    };

    getEmail() {
        return this.email;
    };

    getRole(emp) {
        return emp.role;
    }
}

module.exports = Employee;
