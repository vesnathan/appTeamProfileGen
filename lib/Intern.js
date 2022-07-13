const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(school,...args) {
        super(...args);
        super.getRole = () => {
            return "Intern";
        }
        this.school = school;
        this.getSchool = () => {
            return this.school;
        }
    }
}
module.exports = Intern;

