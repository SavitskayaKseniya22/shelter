import { AnimalType, RangeType } from '@/app/interfaces';
import { shuffle } from '@/app/utils';

export default class PaginationData {
  elements: AnimalType[] = [];

  row: AnimalType[];

  pageSet = {
    0: {
      itemOnPage: 8,
      pageCount: 6,
    },
    1: {
      itemOnPage: 6,
      pageCount: 8,
    },
    2: {
      itemOnPage: 3,
      pageCount: 16,
    },
  };

  ranges: { 0: AnimalType[][]; 1: AnimalType[][]; 2: AnimalType[][] };

  sortedRow: AnimalType[];

  constructor(elements: AnimalType[]) {
    this.elements = elements;
    this.row = PaginationData.createRow(elements);
    this.sortedRow = this.createSortedRow();

    this.ranges = {
      0: this.setRangeData(0),
      1: this.setRangeData(1),
      2: this.setRangeData(2),
    };
  }

  static createRow(cards: AnimalType[]) {
    const result = [];
    while (result.length < 6) {
      result.push(shuffle(cards));
    }

    return result.flat();
  }

  createSortedRow() {
    const getPart = (excArr: AnimalType[], length: number) =>
      shuffle(
        this.elements.filter((animal) => !excArr.includes(animal))
      ).splice(0, length);

    const get24items = () => {
      const row = [];
      row.push(getPart([], 6));
      row.push(getPart(row[row.length - 1], 2));
      row.push(getPart(row[row.length - 1], 4));
      row.push(getPart(row[row.length - 1], 4));
      row.push(getPart(row[row.length - 1], 2));
      row.push(getPart(row[row.length - 1], 6));

      return row;
    };

    return get24items().concat(get24items()).flat();
  }

  public getlastPageNumber(widthRange: RangeType) {
    return this.pageSet[widthRange].pageCount;
  }

  private setRangeData(widthRange: RangeType) {
    const result = [];

    const arr = [...this.sortedRow];

    while (arr.length) {
      result.push(arr.splice(0, this.pageSet[widthRange].itemOnPage));
    }

    return result;
  }

  public getRangeData(widthRange: RangeType, pageNumber: number) {
    return this.ranges[widthRange][pageNumber - 1];
  }

  getLength() {
    return this.elements.length
  }
}
