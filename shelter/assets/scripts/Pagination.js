import { shuffle, makeAnimalCardsList, render } from "./utilities.js";

export class Pagination {
    constructor() {
        this.cardsFromData = makeAnimalCardsList(6);
        this.bigScreenArray = this.hackArray(this.cardsFromData, 6);
        this.middleScreenArray = this.hackArray(this.cardsFromData, 8);
        this.smallScreenArray = this.hackArray(this.cardsFromData, 16);
        this.activePack = this.checkActivePack();
        this.activePageNumber = 8;
        this.lastPageNumber = this.checkLastPageNumber();
        this.renderPageNumber();
        this.renderPaginationContent();
        this.blockButtons();
        this.addListener();
    }

    makePaginationContent(array) {
        return array && array.map((element) => element.renderShortCard()).join("");
    }

    renderPageNumber() {
        render(
            ".friends-page-number",
            this.activePageNumber + "/" + this.lastPageNumber,
            "replacement"
        );
    }

    checkActivePack() {
        if (window.innerWidth > 1279) {
            return this.bigScreenArray;
        } else if (window.innerWidth < 1279 && window.innerWidth > 767) {
            return this.middleScreenArray;
        } else if (window.innerWidth < 767) {
            return this.smallScreenArray;
        }
    }

    checkLastPageNumber() {
        if (this.activePack && this.activePack.length) {
            return this.activePack.length;
        }
    }

    hackArray(array, numOfArray) {
        let arrayToCut = array.slice();
        let chunkLength = Math.floor(arrayToCut.length / numOfArray);
        const result = [];
        while (arrayToCut.length > 0) {
            const chunk = arrayToCut.splice(0, chunkLength);
            //console.log(chunk)
            shuffle(chunk);
            //console.log(chunk)
            result.push(chunk);
        }
        //console.log(result);
        return result;
    }

    renderPaginationContent() {
        let content = this.activePack && this.activePack[this.activePageNumber - 1];
        //console.log(content);
        //console.log(this.activePageNumber);
        // console.log(this.activePageNumber - 1);

        render(
            ".friends-list-pagination",
            this.makePaginationContent(content),
            "replacement"
        );
    }

    blockButtons() {
        if (this.activePageNumber == 1) {
            document.querySelector(".friends-pag-button__left_last").disabled =
                "true;";
            document.querySelector(".friends-pag-button__left").disabled = "true;";
            document.querySelector(".friends-pag-button__right_last").removeAttribute("disabled")
            document.querySelector(".friends-pag-button__right").removeAttribute("disabled")
        } else if (this.activePageNumber == this.activePack.length) {
            document.querySelector(".friends-pag-button__right_last").disabled =
                "true;";
            document.querySelector(".friends-pag-button__right").disabled = "true;";
            document.querySelector(".friends-pag-button__left_last").removeAttribute("disabled")
            document.querySelector(".friends-pag-button__left").removeAttribute("disabled");
        }
    }

    addListener() {
        document.addEventListener("click", (event) => {
            if (event.target.closest(".friends-pag-button__left_last")) {
                console.log(".friends-pag-button__left_last");

                this.activePageNumber = 1;
                this.renderPageNumber();
                this.renderPaginationContent();
                this.blockButtons()




            } else if (event.target.closest(".friends-pag-button__left")) {
                console.log(".friends-pag-button__left");
            } else if (event.target.closest(".friends-pag-button__right")) {
                console.log(".friends-pag-button__right");
            } else if (event.target.closest(".friends-pag-button__right_last")) {
                console.log(".friends-pag-button__right_last");

                this.activePageNumber = this.lastPageNumber;
                this.renderPageNumber();
                this.renderPaginationContent();
                this.blockButtons()


            }
        });

        addEventListener("resize", (event) => {
            this.activePack = this.checkActivePack();
            this.lastPageNumber = this.checkLastPageNumber();

            if (this.activePageNumber > this.lastPageNumber) {
                this.activePageNumber = this.lastPageNumber;
            }

            this.renderPageNumber();
            this.renderPaginationContent();
        });
    }
}
