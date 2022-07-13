const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern");

let nathan = new Employee("Nathan",2,"vesnathan@gmail.com");

let timmy = new Manager("11111111","Timmy",2,"timmy@gmail.com");

let alice = new Engineer("aliceGithug","Alice",2,"alice@gmail.com");

let bob = new Intern("Some School","Bob",2,"bob@gmail.com");

console.log(nathan.getName());
console.log(nathan.getId());
console.log(nathan.getEmail());
console.log(" ");

console.log(timmy.getName());
console.log(timmy.getId());
console.log(timmy.getEmail());
console.log(timmy.getOfficeNumber());
console.log(" ");

console.log(alice.getName());
console.log(alice.getId());
console.log(alice.getEmail());
console.log(alice.getGithub());
console.log(" ");

console.log(bob.getName());
console.log(bob.getId());
console.log(bob.getEmail());
console.log(bob.getSchool());
console.log(" ");
