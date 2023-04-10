import { blockScroll, render } from "./utilities.js";

export class AnimalCard {
  constructor(object) {
    this.name = object.name;
    this.img = object.img;
    this.type = object.type;
    this.breed = object.breed;
    this.description = object.description;
    this.age = object.age;
    this.inoculations = object.inoculations;
    this.diseases = object.diseases;
    this.parasites = object.parasites;
    this.addListener();
    this.render = render.bind(this);
  }

  renderShortCard() {
    return `<li class="friends-card" data-name="${this.name}">
              <img src=${this.img} alt="animal-img" width="270" height="270" />
              <h3>${this.name}</h3>
              <button type="button" class="like-button like-button_white">Learn more</button>
            </li>`;
  }

  togglePopup(value) {
    if (value) {
      document.querySelector(".popup").classList.add("open");
      document.querySelector(".popup").innerHTML = this.renderLongCard();
    } else {
      document.querySelector(".popup").classList.remove("open");
      document.querySelector(".popup").innerHTML = "";
    }
    blockScroll(value);
  }

  addListener() {
    document.addEventListener("click", (event) => {
      if (
        event.target.closest(".friends-card") &&
        event.target.closest(".friends-card").dataset.name == this.name
      ) {
        this.togglePopup(true);
        event.stopImmediatePropagation();
      }
    });

    document.querySelector(".popup").addEventListener("click", (event) => {
      if (
        !event.target.closest(".dialog__wrapper") ||
        event.target.closest(".popup-close")
      ) {
        this.togglePopup(false);
        event.stopImmediatePropagation();
      }
    });
  }

  renderLongCard() {
    return `<div class="dialog__wrapper">
   <img class="popup-img" src=${this.img
      } alt="animal-img" width="270" height="270" />
          <div class="popup-content">
            <h2>${this.name}</h2>
            <h3>${this.breed}</h3>
            <p>${this.description}</p>
            <ul>
              <li><b>Age: </b> ${this.age}</li>
              <li><b>Inoculations: </b>${this.inoculations.join(", ")}</li>
              <li><b>Diseases: </b>${this.diseases.join(", ")}</li>
              <li><b>Parasites: </b>${this.parasites.join(", ")}</li>
            </ul>
          </div>
          <button class="popup-close" type="button";"><img src="../../assets/icons/cross.png" alt="cross" width="12" height="12" /></button>
  </div>
          
        `;
  }
}
