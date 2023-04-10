import { shuffle, makeAnimalCardsList, render } from "./utilities.js";

export class Pagination {
    constructor() {
        this.cardsFromData = makeAnimalCardsList(6);
        this.bigScreenArray = this.hackArray(this.cardsFromData, 6);
        this.middleScreenArray = this.hackArray(this.cardsFromData, 8);
        this.smallScreenArray = this.hackArray(this.cardsFromData, 16);
        this.activePageNumber = 1;
        this.updateActiveData()
        this.renderPagination()
        this.addListener();
    }

    makePaginationContent(array) {
        return array && array.map((element) => element.renderShortCard()).join("");
    }
    hackArray(array, numOfArray) {
        let arrayToCut = array.slice();
        let chunkLength = Math.floor(arrayToCut.length / numOfArray);
        const result = [];
        while (arrayToCut.length > 0) {
            const chunk = arrayToCut.splice(0, chunkLength);
            shuffle(chunk);
            result.push(chunk);
        }
        return result;
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
        return this.activePack && this.activePack.length;

    }

    updateActiveData() {
        this.activePack = this.checkActivePack();
        this.lastPageNumber = this.checkLastPageNumber();
    }

    renderPageNumber() {
        render(
            ".friends-page-number",
            this.activePageNumber,
            "replacement"
        );
    }

    renderPaginationContent() {
        let content = this.activePack && this.activePack[this.activePageNumber - 1];
        render(
            ".friends-list-pagination",
            this.makePaginationContent(content),
            "replacement"
        );
    }

    updateControls() {
        if (this.activePageNumber == 1) {
            document.querySelector(".friends-pag-button__left_last").disabled = "true;";
            document.querySelector(".friends-pag-button__left").disabled = "true;";
            document.querySelector(".friends-pag-button__right_last").removeAttribute("disabled")
            document.querySelector(".friends-pag-button__right").removeAttribute("disabled")
        } else if (this.activePack && (this.activePageNumber == this.activePack.length)) {
            document.querySelector(".friends-pag-button__right_last").disabled = "true;";
            document.querySelector(".friends-pag-button__right").disabled = "true;";
            document.querySelector(".friends-pag-button__left_last").removeAttribute("disabled")
            document.querySelector(".friends-pag-button__left").removeAttribute("disabled");
        } else {
            document.querySelector(".friends-pag-button__right_last").removeAttribute("disabled")
            document.querySelector(".friends-pag-button__right").removeAttribute("disabled")
            document.querySelector(".friends-pag-button__left_last").removeAttribute("disabled")
            document.querySelector(".friends-pag-button__left").removeAttribute("disabled");
        }
    }

    renderPagination() {
        this.renderPageNumber();
        this.renderPaginationContent();
        this.updateControls()
    }

    addListener() {
        document.addEventListener("click", (event) => {
            if (event.target.closest(".friends-pag-button__left_last")) {
                this.activePageNumber = 1;
                this.renderPagination()
            } else if (event.target.closest(".friends-pag-button__left")) {
                if (this.activePageNumber > 1) {
                    this.activePageNumber--;
                    this.renderPagination()
                }
            } else if (event.target.closest(".friends-pag-button__right")) {
                if (this.activePageNumber < this.lastPageNumber) {
                    this.activePageNumber++;
                    this.renderPagination()
                }
            } else if (event.target.closest(".friends-pag-button__right_last")) {
                this.activePageNumber = this.lastPageNumber;
                this.renderPagination()
            }
        });

        addEventListener("resize", (event) => {
            this.updateActiveData()

            if (this.activePageNumber > this.lastPageNumber) {
                this.activePageNumber = this.lastPageNumber;
            }

            this.renderPagination()
        });
    }
}
