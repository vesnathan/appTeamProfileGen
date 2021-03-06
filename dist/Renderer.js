const fs = require('fs');

class Renderer {
    constructor() {
        
        this.mainHtml = "";
        this.cardHtml = "";
        this.finalCardHtml = "";
        this.cardReplaceString = "<CARDS>";
        this.fileName = "";
        this.finalString = "";
        this.setMainHtml = (html) => {
            this.mainHtml = html;
        }
        this.setFileName = (fileName) => {
            this.fileName = fileName;
        }
        this.addCard = (cardData) => {
            this.finalCardHtml += `
                <div class="card col-3 m-1 p-0">
                    <div class="card-head p-2">
                        <h5 class="card-title">${cardData.name}</h5>
                        <h6 class="card-subtitle mb-2">${cardData.constructor.name}</h6>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Employee ID: ${cardData.id}</p>
                        <p class="card-text">Email: <br><a href="mailto:${cardData.email}" class="card-link">${cardData.email}</a></p>`;
                        if (cardData.hasOwnProperty("github")) {
                            this.finalCardHtml += `<p class="card-text">Github User: <br><a href="https://github.com/${cardData.github}" class="card-link">Github Profile</a></p>`;
                        }
                        if (cardData.hasOwnProperty("officeNumber")) {
                            this.finalCardHtml += `<p class="card-text">Office Number: <br>${cardData.officeNumber}</p>`;
                        }
                        if (cardData.hasOwnProperty("school")) {
                            this.finalCardHtml += `<p class="card-text">School: <br><a href="#" class="card-link">${cardData.school}</a></p>`;
                        }
                        this.finalCardHtml += `
                    </div>
                </div>`;
        }
        this.render = () => {
            this.finalString   =  this.mainHtml;
            this.finalString = this.finalString.replace(this.cardReplaceString,this.finalCardHtml);
            
                fs.writeFile(this.fileName,this.finalString, (err) => {
                    if (err) { 
                        console.error(`File could not be written: ${err}`);
                    }
                    else {
                        console.clear(); 
                        console.log("Bye!");
                    }
                });
              
        }
    }
}
module.exports = Renderer;


