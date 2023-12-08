'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './friends.module.scss';
import json from '../../../../../public/json/pets.json';
import Button, {
  ButtonColorType,
  ButtonContentType,
} from '../../shared/Button/Button';
import AnimalCard, {
  AnimalCartType,
  AnimalType,
} from '../../shared/AnimalCard/AnimalCard';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export class Animals {
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

enum DirectionType {
  RIGHT = 'right',
  LEFT = 'left',
}

function Friends() {
  const router = useRouter();

  const animals = useMemo(() => new Animals(json), []);

  const [animation, setAnimation] = useState(false);

  const direction = useRef<DirectionType | null>(null);

  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setAnimation(false);
        if (direction.current === DirectionType.LEFT) {
          animals.updateRowLeft();
        } else if (direction.current === DirectionType.RIGHT) {
          animals.updateRowRight();
        }
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animation]);

  return (
    <section className={styles.friends} id="friends">
      <div className={`${styles.container} container`}>
        <h2>
          Our friends who <br />
          are looking for a house
        </h2>
        <div className={styles.carousel}>
          <Button
            colorType={ButtonColorType.WHITE}
            contentType={ButtonContentType.SYMBOL}
            onClick={() => {
              direction.current = DirectionType.LEFT;
              setAnimation(true);
            }}
            disabled={animation}
          >
            <Image
              width={14}
              height={14}
              src="/icons/icon-arrow-left.svg"
              alt="arrow left"
            />
          </Button>

          <div className={styles.window}>
            <ul
              className={
                animation ? styles[`animation-${direction.current}`] : ''
              }
            >
              {animals.rowPrevPart.map((animal) => {
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

            <ul
              className={
                animation ? styles[`animation-${direction.current}`] : ''
              }
            >
              {animals.rowActivePart.map((animal) => {
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

            <ul
              className={
                animation ? styles[`animation-${direction.current}`] : ''
              }
            >
              {animals.rowNextPart.map((animal) => {
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
          </div>

          <Button
            colorType={ButtonColorType.WHITE}
            contentType={ButtonContentType.SYMBOL}
            onClick={() => {
              direction.current = DirectionType.RIGHT;
              setAnimation(true);
            }}
            disabled={animation}
          >
            <Image
              width={14}
              height={14}
              src="/icons/icon-arrow-right.svg"
              alt="arrow right"
            />
          </Button>
        </div>

        <Button
          colorType={ButtonColorType.COLORED}
          contentType={ButtonContentType.STRING}
          onClick={() => router.push('/pets')}
        >
          Get to know the rest
        </Button>
      </div>
    </section>
  );
}

export default Friends;
