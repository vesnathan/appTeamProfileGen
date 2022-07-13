const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(officeNumber, ...args) {
        super(...args);
        super.getRole = () => {
            return "Manager";
        }
        this.officeNumber = officeNumber;
        this.getOfficeNumber = () => {
            return this.officeNumber;
        }
    };   
}
module.exports = Manager;