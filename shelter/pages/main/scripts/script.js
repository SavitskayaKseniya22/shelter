import data from "../../../assets/pets.json" assert {type: 'json'};
import { AnimalCard } from "../scripts/AnimalCard.js";
import { Shelter } from "../scripts/Shelter.js";


new Shelter()
document.querySelector("body").innerHTML += (new AnimalCard(data[0]).renderLongCard())
