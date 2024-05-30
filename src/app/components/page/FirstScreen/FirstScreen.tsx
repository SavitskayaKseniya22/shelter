'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './first-screen.module.scss';
import Button, {
  ButtonColorType,
  ButtonContentType,
} from '../../shared/Button/Button';

const imageDogLoader = () => {
  if (typeof window !== 'undefined') {
    const calcSize =
      // eslint-disable-next-line no-nested-ternary
      window.innerWidth < 570 ? '260' : window.innerWidth < 700 ? '570' : '700';
    return `/images/start-screen-puppy-${calcSize}.png`;
  }
  return `/images/start-screen-puppy-700.png`;
};

const imageBGLoader = () => {
  if (typeof window !== 'undefined') {
    const calcSize = window.innerWidth < 768 ? '0' : '768';
    return `/images/start-screen-gradient-background-${calcSize}.png`;
  }
  return `/images/start-screen-gradient-background-768.png`;
};
function FirstScreen() {
  return (
    <section className={styles['first-screen']}>
      <Image
        loader={imageBGLoader}
        src="/images/start-screen-gradient-background-768.png"
        priority
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'bottom left',
          right: 'unset',
          top: 'unset',
        }}
        quality={100}
        alt="background"
        className={styles.image_background}
      />

      <div className={`container ${styles.container}`}>
        <Image
          loader={imageDogLoader}
          src="/images/start-screen-puppy-700.png"
          priority
          alt="Puppy"
          className={styles.image_dog}
          quality={75}
          fill
          style={{
            top: 'unset',
            left: 'unset',
            bottom: 0,
          }}
        />

        <h2>
          Not only people
          <br />
          need a house
        </h2>
        <p>
          We offer to give a chance to a little and nice puppy with an extremely
          wide and open heart. He or she will love you more than anybody else in
          the world, you will see!
        </p>

        <Button
          colorType={ButtonColorType.COLORED}
          contentType={ButtonContentType.STRING}
          onClick={() => {}}
        >
          <Link href="/#friends">Make a friend</Link>
        </Button>
      </div>
    </section>
  );
}

export default FirstScreen;
