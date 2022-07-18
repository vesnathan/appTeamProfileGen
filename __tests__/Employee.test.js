const Employee = require("../lib/Employee.js");

describe("Employee", () => {
 	describe("Initialisation", () => {
        const testEmployee = new Employee();
        it("Should return an Employee object with name key", () => {
            expect("name" in testEmployee).toEqual(true);
        });
        it("Should return an Employee object with id key", () => {
            expect("id" in testEmployee).toEqual(true);
        });
        it("Should return an Employee object with email key", () => {
            expect("id" in testEmployee).toEqual(true);
        });
        it("Should return 'Employee' when  getRole is called", () => {
            expect(testEmployee.getRole()).toEqual("Employee");
        });

    });
    describe("Properties", () => {
        const testEmployee = new Employee(); 
        it("Should return 'testName' when the getName() method is called", () => {
            testEmployee.name = "testName";
            expect(testEmployee.getName()).toEqual("testName");
        });
        it("Should return integer '2' when the getId() method is called", () => {
            testEmployee.id = 2;
            expect(testEmployee.getId()).toEqual(2);
        });
        it("Should return 'test@email.com' when the getEmail() method is called", () => {
            testEmployee.email = 'test@email.com';
            expect(testEmployee.getEmail()).toEqual("test@email.com");
        });
    });
});





