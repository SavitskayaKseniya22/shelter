import data from "./pets.json" assert {type: 'json'};
import { AnimalCard } from "./AnimalCard.js";

export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

}

export function render(selector, value, action) {
    if (action == 'adding') {
        document.querySelector(selector).innerHTML += value;
    } else if (action == "replacement") {
        document.querySelector(selector).innerHTML = value;
    }

}

export const repeatArray = (arr, numberOfRepeat) => Array(numberOfRepeat).fill(arr).flat();

export function makeAnimalCardsList(numberOfRepeat) {
    let wholeData = repeatArray(data, numberOfRepeat)
    return wholeData.map((element) => (new AnimalCard(element)))
}

export function makeShadowBackground(value) {
    document.body.style.overflow = value === true ? 'hidden' : '';
}

export function toggleCheckbox(checkbox, value) {
    checkbox.checked = value;
}

export function checkOffset() {
    if (window.innerWidth > 1279) {
        return "990px"
    } else if (window.innerWidth < 1279 && window.innerWidth > 767) {
        return "620px"
    } else if (window.innerWidth < 767) {
        return "310px"
    }
}