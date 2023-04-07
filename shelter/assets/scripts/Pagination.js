
import { shuffle, makeAnimalCardsList, render } from "./utilities.js";

export class Pagination {
    constructor() {
        this.renderPagination()
    }

    makePagination() {
        let cardsFromData = makeAnimalCardsList(6);
        shuffle(cardsFromData);
        return cardsFromData.map((element) => element.renderShortCard()).join("");

    }


    renderPagination() {
        render(".friends-list", this.makePagination(), "replacement")
    }


    makeSalut() {
        // alert(1)
    }
}