'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './animal-card.module.scss';
import Button, { ButtonColorType, ButtonContentType } from '../Button/Button';

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
}

export enum AnimalCartType {
  SHORT,
  DETAILED,
}

function AnimalCard({
  animal,
  type,
}: {
  animal: AnimalType;
  type: AnimalCartType;
}) {
  const router = useRouter();

  if (type === AnimalCartType.SHORT) {
    return (
      <li className={styles.card}>
        <Image
          className={styles.image}
          src={animal.img}
          alt="Animal"
          width="270"
          height="270"
        />

        <h3>{animal.name}</h3>

        <Button
          colorType={ButtonColorType.WHITE}
          contentType={ButtonContentType.STRING}
          onClick={() =>
            router.push(`/animal/${animal.name}`, { scroll: false })
          }
        >
          Learn more
        </Button>
      </li>
    );
  }

  return (
    <div className={styles['card-detailed']}>
      <Image
        className={styles.image}
        src={animal.img}
        alt="Animal"
        width="270"
        height="270"
      />

      <div className={styles.content}>
        <div className={styles.titles}>
          <h2>{animal.name}</h2>
          <h3>{animal.breed}</h3>
        </div>

        <p>{animal.description}</p>
        <ul>
          <li>
            <b>Age: </b> {animal.age}
          </li>
          <li>
            <b>Inoculations: </b>
            {animal.inoculations.join(', ')}
          </li>
          <li>
            <b>Diseases: </b>
            {animal.diseases.join(', ')}
          </li>
          <li>
            <b>Parasites: </b>
            {animal.parasites.join(', ')}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AnimalCard;
