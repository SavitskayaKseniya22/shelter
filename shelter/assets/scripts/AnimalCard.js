export class AnimalCard {
  constructor(object) {
    this.name = object.name
    this.img = object.img
    this.type = object.type
    this.breed = object.breed
    this.description = object.description
    this.age = object.age
    this.inoculations = object.inoculations
    this.diseases = object.diseases
    this.parasites = object.parasites

  }

  renderShortCard() {
    return `<li class="friends-card" onclick="window.popup.showModal()">
              <img src=${this.img} alt="animal-img" width="270" height="270" />
              <h3>${this.name}</h3>
              <button type="button" class="like-button like-button_white">Learn more</button>
            </li>`
  }

  openAndFillPopup() {
    window.popup.showModal();
    document.querySelector(".popup").innerHTML = this.renderLongCard();
  }

  renderLongCard() {
    return `
          <img class="popup-img" src=${this.img} alt="animal-img" width="270" height="270" />
          <div class="popup-content">
            <h2>${this.name}</h2>
            <h3>${this.breed}</h3>
            <p>${this.description}</p>
            <ul>
              <li><b>Age: </b> ${this.age}</li>
              <li><b>Inoculations: </b>${this.inoculations}</li>
              <li><b>Diseases: </b>${this.diseases}</li>
              <li><b>Parasites: </b>${this.parasites}</li>
            </ul>
          </div>
          <button class="popup-close" type="button" onclick="window.popup.close();"><img src="../../assets/icons/cross.png" alt="cross" width="12" height="12" /></button>
        `

  }
}