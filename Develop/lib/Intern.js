// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")
class Intern extends Employee {
    constructor(id, email, name, school) {
        super(id, email, name);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool(){
        return this.school;
    }
}
module.exports = Intern;