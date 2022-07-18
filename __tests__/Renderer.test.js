const Renderer = require("../dist/Renderer.js");
require("html-validate/jest");
describe("renderer", () => {
    describe("Initialisation", () => {
        const testRender = new Renderer();
        it("should return a renderer object",() => {
            expect(testRender).toBeInstanceOf(Renderer);
        });
    });
    describe("Methods", () => {
        const testRender = new Renderer();
        it("should set mainHtml to '<p></p>'", () => {
            testRender.setMainHtml("<p></p>");
            expect(testRender.mainHtml).toEqual("<p></p>");
        });
        it("should set fileName to 'index.html'", () => {
            testRender.setFileName("index.html");
            expect(testRender.fileName).toEqual("index.html");
        });
    });
});

