import React from 'react';
import Image from 'next/image';
import styles from './friends.module.scss';

function Friends() {
  return (
    <section className={styles.friends} id="friends">
      <div className={`${styles.container} container`}>
        <h2>
          Our friends who <br />
          are looking for a house
        </h2>
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
            left
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

        <a href="../../pages/pets/index.html" className={styles['like-button']}>
          Get to know the rest
        </a>
      </div>
    </section>
  );
}

export default Friends;
