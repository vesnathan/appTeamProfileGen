const Manager = require("../lib/Manager.js");
describe("Manager", () => {
    describe("Initialisation", () => {
       const testManager = new Manager();
       it("Should return an Manager object with name key", () => {
           expect("name" in testManager).toEqual(true);
       });
       it("Should return an Manager object with id key", () => {
           expect("id" in testManager).toEqual(true);
       });
       it("Should return an Manager object with email key", () => {
           expect("id" in testManager).toEqual(true);
       });
       it("Should return an Manager object with officeNumber key", () => {
           expect("officeNumber" in testManager).toEqual(true);
       });
       it("Should return 'Manager' when  getRole is called", () => {
           expect(testManager.getRole()).toEqual("Manager");
       });

   });
   describe("Properties", () => {
       const testManager = new Manager(); 
       it("Should return 'testName' when the getName() method is called", () => {
           testManager.name = "testName";
           expect(testManager.getName()).toEqual("testName");
       });
       it("Should return integer '2' when the getId() method is called", () => {
           testManager.id = 2;
           expect(testManager.getId()).toEqual(2);
       });
       it("Should return 'test@email.com' when the getEmail() method is called", () => {
           testManager.email = 'test@email.com';
           expect(testManager.getEmail()).toEqual("test@email.com");
       });
       it("Should return '123 456 789' when the getOfficeNumber() method is called", () => {
           testManager.officeNumber = '123 456 789';
           expect(testManager.getOfficeNumber()).toEqual("123 456 789");
       });
   });
});