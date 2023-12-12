'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './friends.module.scss';
import Button, {
  ButtonColorType,
  ButtonContentType,
} from '../../shared/Button/Button';
import Carousel from './components/Carousel';

function Friends() {
  const router = useRouter();

  return (
    <section className={styles.friends} id="friends">
      <div className={`${styles.container} container`}>
        <h3>
          Our friends who <br />
          are looking for a house
        </h3>

        <Carousel />

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
