import { shuffle, makeAnimalCardsList, render, checkOffset } from "./utilities.js";

export class Pagination {
    constructor() {

        this.cardsFromData = makeAnimalCardsList(6);
        this.bigScreenArray = this.hackArray(this.cardsFromData, 6);
        this.middleScreenArray = this.hackArray(this.cardsFromData, 8);
        this.smallScreenArray = this.hackArray(this.cardsFromData, 16);
        this.activePageNumber = 4;
        this.lastPageNumber = this.checkLastPageNumber();
        this.renderPageNumber()
        this.addListener()
        this.activePack = this.checkActivePack()
        this.renderPaginationContent()
    }

    makePaginationContent(array) {

        return array.map((element) => element.renderShortCard()).join("");
    }

    renderPageNumber() {
        render(".friends-page-number", this.activePageNumber + "/" + this.lastPageNumber, "replacement")
    }

    checkActivePack() {
        if (window.innerWidth > 1279) {
            return this.bigScreenArray
        } else if (window.innerWidth < 1279 && window.innerWidth > 767) {
            return this.middleScreenArray
        } else if (window.innerWidth < 767) {
            return this.smallScreenArray
        }
    }

    checkLastPageNumber() {
        if (window.innerWidth > 1279) {
            return 6
        } else if (window.innerWidth < 1279 && window.innerWidth > 767) {
            return 8
        } else if (window.innerWidth < 767) {
            return 16
        }
    }



    hackArray(array, numOfArray) {
        let arrayToCut = array.slice()
        let chunkLength = Math.floor(arrayToCut.length / numOfArray);
        const result = [];
        while (arrayToCut.length > 0) {
            const chunk = arrayToCut.splice(0, chunkLength);
            //console.log(chunk)
            shuffle(chunk)
            //console.log(chunk)
            result.push(chunk);
        }
        console.log(result)
        return result
    }



    renderPaginationContent() {
        render(".friends-list-pagination", this.makePaginationContent(this.activePack[this.activePageNumber - 1]), "replacement")
    }

    addListener() {
        document.addEventListener('click', (event) => {

            if (event.target.closest(".friends-pag-button__right")) {

            } else if (event.target.closest(".friends-pag-button__left")) {

            }


        });


        addEventListener("resize", (event) => {
            this.lastPageNumber = this.checkLastPageNumber();
            this.activePack = this.checkActivePack();
            this.renderPageNumber();
            this.renderPaginationContent()

        });



    }



}