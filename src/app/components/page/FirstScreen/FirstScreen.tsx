'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './first-screen.module.scss';
import Button, {
  ButtonColorType,
  ButtonContentType,
} from '../../shared/Button/Button';

function FirstScreen() {
  return (
    <section className={styles['first-screen']}>
      <Image
        src="/images/start-screen-gradient-background.png"
        priority={false}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'bottom  left',
          right: 'unset',
          top: 'unset',
        }}
        quality={100}
        alt="background"
        className={styles.image_background}
      />

      <div className={`container ${styles.container}`}>
        <Image
          src="/images/start-screen-puppy.png"
          priority={false}
          width={698}
          height={728}
          style={{
            position: 'absolute',
            bottom: '0',
            right: '40px',
          }}
          alt="Puppy"
          className={styles.image_dog}
          quality={100}
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
