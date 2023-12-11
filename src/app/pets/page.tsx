'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button, {
  ButtonColorType,
  ButtonContentType,
} from '../components/shared/Button/Button';
import styles from './page.module.scss';
import json from '../../../public/json/pets.json';
import AnimalCard from '../components/shared/AnimalCard/AnimalCard';
import { checkRange, shuffle } from '../utils';
import { AnimalCartType, AnimalType, RangeType } from '../interfaces';

export class Animals {
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
    this.row = Animals.createRow(elements);
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
}

function Pets() {
  const [animals, setAnimals] = useState<null | Animals>(null);

  const [pageNumber, setPageNumber] = useState(1);

  const [widthRange, setWidthRange] = useState<RangeType | null>(null);

  useEffect(() => {
    setAnimals(new Animals(json));
    setWidthRange(checkRange());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidthRange(checkRange());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (
      animals &&
      widthRange !== null &&
      pageNumber > animals.getlastPageNumber(widthRange)
    ) {
      setPageNumber(animals.getlastPageNumber(widthRange));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widthRange]);

  return (
    <main className={styles.pets}>
      <div className={`${styles.container} container`}>
        <h3>
          Our friends who <br />
          are looking for a house
        </h3>

        {animals && widthRange !== null && (
          <>
            <ul className={styles.pagination}>
              {animals.getRangeData(widthRange, pageNumber).map((animal) => {
                const key = Math.random();
                return (
                  <AnimalCard
                    animal={animal}
                    key={key}
                    type={AnimalCartType.SHORT}
                  />
                );
              })}
            </ul>
            <div className={styles.controls}>
              <Button
                colorType={ButtonColorType.WHITE}
                contentType={ButtonContentType.SYMBOL}
                disabled={pageNumber === 1}
                onClick={() => {
                  setPageNumber(1);
                }}
              >
                <Image
                  width={27}
                  height={23}
                  src="/icons/arrow-right-end.svg"
                  alt="arrow right end"
                  style={{ transform: 'rotate(0.5turn)' }}
                />
              </Button>

              <Button
                colorType={ButtonColorType.WHITE}
                contentType={ButtonContentType.SYMBOL}
                disabled={pageNumber === 1}
                onClick={() => {
                  setPageNumber((a) => (a > 1 ? a - 1 : 1));
                }}
              >
                <Image
                  width={23}
                  height={13}
                  src="/icons/arrow-right-next.svg"
                  alt="arrow right next"
                  style={{ transform: 'rotate(0.5turn)' }}
                />
              </Button>

              <Button
                colorType={ButtonColorType.COLORED}
                contentType={ButtonContentType.SYMBOL}
                onClick={() => {}}
              >
                {pageNumber}
              </Button>

              <Button
                colorType={ButtonColorType.WHITE}
                contentType={ButtonContentType.SYMBOL}
                disabled={pageNumber === animals.getlastPageNumber(widthRange)}
                onClick={() => {
                  setPageNumber((a) => {
                    const lastPage = animals.getlastPageNumber(widthRange);
                    return a < lastPage ? a + 1 : lastPage;
                  });
                }}
              >
                <Image
                  width={23}
                  height={13}
                  src="/icons/arrow-right-next.svg"
                  alt="arrow right next"
                />
              </Button>
              <Button
                colorType={ButtonColorType.WHITE}
                contentType={ButtonContentType.SYMBOL}
                disabled={pageNumber === animals.getlastPageNumber(widthRange)}
                onClick={() => {
                  setPageNumber(animals.getlastPageNumber(widthRange));
                }}
              >
                <Image
                  width={27}
                  height={23}
                  src="/icons/arrow-right-end.svg"
                  alt="arrow right end"
                />
              </Button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Pets;
