
import { shuffle, makeAnimalCardsList, render } from "./utilities.js";

export class Corousel {
    constructor() {
        this.cardsFromData = makeAnimalCardsList(1);
        shuffle(this.cardsFromData)
        this.activeCards = this.cardsFromData.slice(0, 3);
        this.activeContent = this.makeContentFromCard(this.activeCards)
        render(".friends-list__active", this.activeContent, "replacement")


        this.addListener()
        this.numberOfActiveCards = 3;


    }



    makeContentFromCard(cards) {
        return cards.map((element) => element.renderShortCard()).join("");
    }


    makeAnotherPart() {
        let filteredCards = this.cardsFromData.filter((card) => {
            let j = 0;
            for (let i = 0; i < this.activeCards.length; i++) {
                if (card.name != this.activeCards[i].name) {
                    j++;
                }
            }
            return j == 3 ? true : false

        })
        shuffle(filteredCards);
        return filteredCards.slice(0, 3)
    }

    addListener() {
        document.addEventListener('click', (event) => {

            if (event.target.closest(".friends-pag-button__right")) {
                this.nextCards = this.makeAnotherPart();

                this.nextContent = this.makeContentFromCard(this.nextCards);
                render(".friends-list__next", this.nextContent, "replacement")


                this.buffer = this.activeContent;


                document.querySelector(".friends-list__active").style = "transform: translateX(-990px); transition: transform 1s";
                document.querySelector(".friends-list__next").style = "transform: translateX(-990px); transition: transform 1s";

                setTimeout(() => {
                    render(".friends-list__active", this.nextContent, "replacement")
                    document.querySelector(".friends-list__active").style = "";
                    document.querySelector(".friends-list__next").style = "";
                }, "1000");

                this.activeCards = this.nextCards;
                /*
                                document.querySelector(".friends-list__next").style.transform = "translateX(-990px)";
                
                
                
                
                                setTimeout(() => {
                                    document.querySelector(".friends-list").appendChild(document.createElement('ul')).innerHTML = this.part.map((element) => element.renderShortCard()).join("");
                                }, "2000");
                
                                //document.querySelector(".friends-list").appendChild(document.createElement('ul')).innerHTML = this.part.map((element) => element.renderShortCard()).join("");
                
                */



            } else if (event.target.closest(".friends-pag-button__left")) {

                document.querySelector(".friends-list__active").style.transform = "translateX(990px)";
                document.querySelector(".friends-list__previous").style.transform = "translateX(990px)";
                document.querySelector(".friends-list__next").style.transform = "translateX(990px)";
            }


        });

        addEventListener("resize", (event) => {
            if (window.innerWidth > 1279) {
                this.numberOfActiveCards = 3
            } else if (window.innerWidth < 1279 && window.innerWidth > 767) {
                this.numberOfActiveCards = 2
            } else if (window.innerWidth < 767) {
                this.numberOfActiveCards = 1
            }
            //console.log(this.numberOfActiveCards)

        });



    }
}