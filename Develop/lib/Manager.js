// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor(id, email, name, officeNumber) {
        super(id, email, name);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
} 

