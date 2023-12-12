'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AnimalType, AnimalCartType } from '@/app/interfaces';
import styles from './animal-card.module.scss';
import stylesDetailed from '../../../animal/[name]/page.module.scss';
import Button, { ButtonColorType, ButtonContentType } from '../Button/Button';

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

        <h4>{animal.name}</h4>

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
        className={`${styles.image} ${stylesDetailed.image}`}
        src={animal.img}
        alt="Animal"
        width="270"
        height="270"
      />

      <div className={styles.content}>
        <div className={styles.titles}>
          <h3>{animal.name}</h3>
          <h4>{animal.breed}</h4>
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
