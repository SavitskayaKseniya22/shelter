import { AnimalType } from '@/app/interfaces';

export enum DirectionType {
  RIGHT = 'right',
  LEFT = 'left',
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class CarouselData {
  elements: AnimalType[] = [];

  head: number = 0;

  row: AnimalType[];

  constructor(elements: AnimalType[]) {
    this.elements = elements;
    this.row = [...elements, elements[0]];
  }

  getCard(usedCards: AnimalType[]) {
    const cards = this.elements.filter((card) => !usedCards.includes(card));
    return cards[getRandomInt(cards.length)];
  }

  getThreeCards(usedCards: AnimalType[]) {
    const inclusiveCards = [...usedCards];
    const result = [];

    while (result.length < 3) {
      const card = this.getCard(inclusiveCards);
      inclusiveCards.push(card);
      result.push(card);
    }

    return result;
  }

  get rowActivePart() {
    return this.row.slice(3, 6);
  }

  get rowPrevPart() {
    return this.row.slice(0, 3);
  }

  get rowNextPart() {
    return this.row.slice(6, 9);
  }

  updateRowLeft() {
    this.row = [
      ...this.getThreeCards(this.row.slice(0, 3)),
      ...this.row.slice(0, 6),
    ];
  }

  updateRowRight() {
    this.row = [
      ...this.row.slice(3, 9),
      ...this.getThreeCards(this.row.slice(6, 9)),
    ];
  }
}
