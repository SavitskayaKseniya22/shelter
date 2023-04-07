export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

}


export function render(selector, value, action) {
    if (action == 'adding') {
        document.querySelector(`${selector}`).innerHTML += `${value}`;
    } else if (action == "replacement") {
        document.querySelector(`${selector}`).innerHTML == `${value}`;
    }

}