export enum ScreenSize {
  LAPTOP = 1279,
  TABLET = 767,
}

export type RangeType = 0 | 1 | 2;

export interface AnimalType {
  name: string;
  img: string;
  type: string;
  breed: string;
  description: string;
  age: string;
  inoculations: string[];
  diseases: string[];
  parasites: string[];
  spriteIndex: number;
}

export enum AnimalCartType {
  SHORT,
  DETAILED,
}
