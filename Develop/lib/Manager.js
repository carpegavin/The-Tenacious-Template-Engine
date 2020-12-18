// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Manager extends Employee {
    constructor(id, email, name, officeNumber) {
        super(id, email, name);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber;

    }
} 

module.exports = Manager;
