const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(github, ...args) {
        super(...args);
        super.getRole = () => {
            return "Engineer";
        }
        this.github = github;
        this.getGithub = () => {
            return this.github;
        }
    }
}
module.exports = Engineer;