const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("Initialisation", () => {
       const testEngineer = new Engineer();
       it("Should return an Engineer object with name key", () => {
           expect("name" in testEngineer).toEqual(true);
       });
       it("Should return an Engineer object with id key", () => {
           expect("id" in testEngineer).toEqual(true);
       });
       it("Should return an Engineer object with email key", () => {
           expect("id" in testEngineer).toEqual(true);
       });
       it("Should return an Engineer object with github key", () => {
           expect("github" in testEngineer).toEqual(true);
       });
       it("Should return 'Engineer' when  getRole is called", () => {
           expect(testEngineer.getRole()).toEqual("Engineer");
       });

   });
   describe("Properties", () => {
       const testEngineer = new Engineer(); 
       it("Should return 'testName' when the getName() method is called", () => {
           testEngineer.name = "testName";
           expect(testEngineer.getName()).toEqual("testName");
       });
       it("Should return integer '2' when the getId() method is called", () => {
           testEngineer.id = 2;
           expect(testEngineer.getId()).toEqual(2);
       });
       it("Should return 'test@email.com' when the getEmail() method is called", () => {
           testEngineer.email = 'test@email.com';
           expect(testEngineer.getEmail()).toEqual("test@email.com");
       });
       it("Should return 'githubUser' when the getGithub() method is called", () => {
           testEngineer.github = 'githubUser';
           expect(testEngineer.getGithub()).toEqual("githubUser");
       });
   });
});

