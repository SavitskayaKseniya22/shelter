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
  const {
    spriteIndex,
    name,
    img,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
  } = animal;

  if (type === AnimalCartType.SHORT) {
    return (
      <li className={styles.card}>
        <div className={styles.image}>
          <Image
            src="/images/cards/jpg/pets-cards-sprite.jpg"
            alt="Animal"
            fill
            objectFit="cover"
            objectPosition={`0 -${spriteIndex * 270}px`}
          />
        </div>

        <div className={styles.content}>
          <h4>{name}</h4>

          <Button
            colorType={ButtonColorType.WHITE}
            contentType={ButtonContentType.STRING}
            onClick={() => router.push(`/animal/${name}`, { scroll: false })}
          >
            Learn more
          </Button>
        </div>
      </li>
    );
  }

  return (
    <div className={styles['card-detailed']}>
      <Image
        className={`${styles.image} ${stylesDetailed.image}`}
        src={img}
        alt="Animal"
        width="270"
        height="270"
      />

      <div className={styles.content}>
        <div className={styles.titles}>
          <h3>{name}</h3>
          <h4>{breed}</h4>
        </div>

        <p>{description}</p>

        <ul>
          <li>
            <b>Age: </b> {age}
          </li>
          <li>
            <b>Inoculations: </b>
            {inoculations.join(', ')}
          </li>
          <li>
            <b>Diseases: </b>
            {diseases.join(', ')}
          </li>
          <li>
            <b>Parasites: </b>
            {parasites.join(', ')}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AnimalCard;
