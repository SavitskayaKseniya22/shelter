
import { shuffle, makeAnimalCardsList, render, checkOffset } from "./utilities.js";

export class Corousel {
    constructor() {
        this.cardsFromData = makeAnimalCardsList(1);
        shuffle(this.cardsFromData)
        this.activeCards = this.cardsFromData.slice(0, 3);
        this.activeContent = this.makeContentFromCard(this.activeCards)
        this.nextCards = this.cardsFromData.slice(3, 6);
        this.nextContent = this.makeContentFromCard(this.activeCards)
        this.previousCards = this.cardsFromData.slice(5, 8);
        this.previousContent = this.makeContentFromCard(this.activeCards)
        render(".friends-list__active", this.activeContent, "replacement")
        render(".friends-list__next", this.nextContent, "replacement")
        render(".friends-list__previous", this.previousContent, "replacement")
        this.addListener()



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

            if (event.target.closest(".friends-corousel-button__right")) {
                this.offset = checkOffset()
                this.nextCards = this.makeAnotherPart();
                this.nextContent = this.makeContentFromCard(this.nextCards);
                render(".friends-list__next", this.nextContent, "replacement")


                this.buffer = this.activeContent;


                document.querySelector(".friends-list__active").style = `transform: translateX(-${this.offset}); transition: transform 1s`;
                document.querySelector(".friends-list__next").style = `transform: translateX(-${this.offset}); transition: transform 1s`;

                setTimeout(() => {
                    render(".friends-list__active", this.nextContent, "replacement")
                    document.querySelector(".friends-list__active").style = "";
                    document.querySelector(".friends-list__next").style = "";
                }, "1000");

                this.activeCards = this.nextCards;




            } else if (event.target.closest(".friends-corousel-button__left")) {
                this.offset = checkOffset()
                this.previousCards = this.makeAnotherPart();

                this.previousContent = this.makeContentFromCard(this.previousCards);
                render(".friends-list__previous", this.previousContent, "replacement")


                this.buffer = this.activeContent;


                document.querySelector(".friends-list__active").style = `transform: translateX(${this.offset}); transition: transform 1s`;
                document.querySelector(".friends-list__previous").style = `transform: translateX(${this.offset}); transition: transform 1s`;

                setTimeout(() => {
                    render(".friends-list__active", this.previousContent, "replacement")
                    document.querySelector(".friends-list__active").style = "";
                    document.querySelector(".friends-list__previous").style = "";
                }, "1000");

                this.activeCards = this.previousCards;


            }


        });






    }

}