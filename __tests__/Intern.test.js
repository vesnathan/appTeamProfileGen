const Intern = require("../lib/Intern.js");
describe("Intern", () => {
    describe("Initialisation", () => {
       const testIntern = new Intern();
       it("Should return an Intern object with name key", () => {
           expect("name" in testIntern).toEqual(true);
       });
       it("Should return an Intern object with id key", () => {
           expect("id" in testIntern).toEqual(true);
       });
       it("Should return an Intern object with email key", () => {
           expect("id" in testIntern).toEqual(true);
       });
       it("Should return an Intern object with school key", () => {
           expect("school" in testIntern).toEqual(true);
       });
       it("Should return 'Intern' when  getRole is called", () => {
           expect(testIntern.getRole()).toEqual("Intern");
       });

   });
   describe("Properties", () => {
       const testIntern = new Intern(); 
       it("Should return 'testName' when the getName() method is called", () => {
           testIntern.name = "testName";
           expect(testIntern.getName()).toEqual("testName");
       });
       it("Should return integer '2' when the getId() method is called", () => {
           testIntern.id = 2;
           expect(testIntern.getId()).toEqual(2);
       });
       it("Should return 'test@email.com' when the getEmail() method is called", () => {
           testIntern.email = 'test@email.com';
           expect(testIntern.getEmail()).toEqual("test@email.com");
       });
       it("Should return 'someSchool' when the getSchool() method is called", () => {
           testIntern.school = 'someSchool';
           expect(testIntern.getSchool()).toEqual("someSchool");
       });
   });
});