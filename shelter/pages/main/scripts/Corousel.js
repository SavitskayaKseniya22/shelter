
import { shuffle, makeAnimalCardsList, render } from "../scripts/utilities.js";

export class Corousel {
    constructor() {
        this.renderCorousel()
    }

    makeCorousel() {
        let cardsFromData = makeAnimalCardsList(1);
        shuffle(cardsFromData);
        return cardsFromData.map((element) => element.renderShortCard()).join("");

    }




    renderCorousel() {
        render(".friends-list", this.makeCorousel(), "replacement")
    }


    makeSalut() {
        // alert(1)
    }
}