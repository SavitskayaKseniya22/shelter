'use client';

import React, { useEffect, useRef, useState } from 'react';
import AnimalCard from '@/app/components/shared/AnimalCard/AnimalCard';
import Button, {
  ButtonColorType,
  ButtonContentType,
} from '@/app/components/shared/Button/Button';
import Spinner from '@/app/components/shared/Spinner/Spinner';
import { AnimalCartType } from '@/app/interfaces';
import Image from 'next/image';
import CarouselData, { DirectionType } from './CarouselData';
import styles from './carousel.module.scss';

export default function Carousel() {
  const [animals, setAnimals] = useState<null | CarouselData>(null);

  const [animation, setAnimation] = useState(false);

  const [isLoading, setLoading] = useState(true);

  const direction = useRef<DirectionType | null>(null);

  useEffect(() => {
    fetch('/json/pets.json')
      .then((res) => res.json())
      .then((data) => {
        setAnimals(new CarouselData(data));
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (animation && animals) {
      setTimeout(() => {
        setAnimation(false);
        if (direction.current === DirectionType.LEFT) {
          animals.updateRowLeft();
        } else if (direction.current === DirectionType.RIGHT) {
          animals.updateRowRight();
        }
      }, 1000);
    }
  }, [animals, animation]);

  if (isLoading) {
    return (
      <div className={styles.carousel}>
        <Spinner />
      </div>
    );
  }

  if (!isLoading && !animals) {
    return (
      <div className={styles.carousel}>
        <h5>No pets found</h5>
      </div>
    );
  }

  if (!isLoading && animals) {
    return (
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
    );
  }
}
