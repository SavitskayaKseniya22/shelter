import React from 'react';
import Image from 'next/image';
import styles from './first-screen.module.scss';

function FirstScreen() {
  return (
    <div className={styles['first-screen']}>
      <Image
        src="/images/start-screen-gradient-background.png"
        width={500}
        height={500}
        alt="background"
      />
      <section className={styles['first-screen-content']}>
        <Image
          src="/images/start-screen-puppy.png"
          width={500}
          height={500}
          alt="Puppy"
        />
        <div className={`${styles.container} container`}>
          <h1>
            Not only people
            <br />
            need a house
          </h1>
          <p>
            We offer to give a chance to a little and nice puppy with an
            extremely wide and open heart. He or she will love you more than
            anybody else in the world, you will see!
          </p>

          <a href="#friends" className="like-button">
            Make a friend
          </a>
        </div>
      </section>
    </div>
  );
}

export default FirstScreen;
