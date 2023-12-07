'use client';

import React, { useState } from 'react';
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

function Friends() {
  const [data] = useState<AnimalType[]>(json);
  console.log(data);

  const router = useRouter();

  return (
    <section className={styles.friends} id="friends">
      <div className={`${styles.container} container`}>
        <h2>
          Our friends who <br />
          are looking for a house
        </h2>
        {data.map((animal) => (
          <AnimalCard
            animal={animal}
            key={animal.description}
            type={AnimalCartType.SHORT}
          />
        ))}
        <div className={styles['friends-carousel']}>
          <button
            type="button"
            className={`${styles['friends-control-button']} ${styles['friends-corousel-button__left']} ${styles['like-button_white']} `}
          >
            <Image
              width={30}
              height={30}
              src="/icons/icon-arrow-left.svg"
              alt="arrow left"
            />
          </button>
          <div className={styles['friends-list']}>
            <ul className={styles['friends-list__previous']} />
            <ul className={styles['friends-list__active']} />
            <ul className={styles['friends-list__next']} />
          </div>
          <button
            type="button"
            className={`${styles['friends-control-button']} ${styles['friends-corousel-button__right']} ${styles['like-button_white']} `}
          >
            <Image
              width={30}
              height={30}
              src="/icons/icon-arrow-right.svg"
              alt="arrow right"
            />
          </button>
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
