import { ScreenSize } from './interfaces';

export function shuffle<T>(array: T[]): T[] {
  const initArray = [...array];

  for (let i = initArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [initArray[i], initArray[j]] = [initArray[j], initArray[i]];
  }
  return initArray;
}

export function checkRange() {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    if (width > ScreenSize.LAPTOP) {
      return 0;
    }
    if (width > ScreenSize.TABLET) {
      return 1;
    }
    return 2;
  }

  return 0


}
