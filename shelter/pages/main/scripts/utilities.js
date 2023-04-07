import data from "../../../assets/pets.json" assert {type: 'json'};
import { AnimalCard } from "../scripts/AnimalCard.js";

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
        console.log(1)
        document.querySelector(selector).innerHTML = value;
    }

}

export const repeatArray = (arr, numberOfRepeat) => Array(numberOfRepeat).fill(arr).flat();

export function makeAnimalCardsList(numberOfRepeat) {
    let wholeData = repeatArray(data, numberOfRepeat)
    return wholeData.map((element) => (new AnimalCard(element)))
}