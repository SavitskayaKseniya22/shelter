import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

function Pets() {
  return (
    <main>
      <div className={`${styles.container} container`}>
        <h2>
          Our friends who <br />
          are looking for a house
        </h2>
        <ul className={styles['friends-list-pagination']} />
        <div className={styles['friends-carousel']}>
          <button
            type="button"
            className={`${styles['friends-control-button']} ${styles['like-button_white']} ${styles['friends-pag-button__left_last']} `}
          >
            <Image
              width={30}
              height={30}
              src="/icons/arrow-right-end.svg"
              alt="arrow right end"
            />
          </button>
          <button
            type="button"
            className={`${styles['friends-control-button']} ${styles['like-button_white']} ${styles['friends-pag-button__left']} `}
          >
            <Image
              width={30}
              height={30}
              src="/icons/arrow-right-next.svg"
              alt="arrow right next"
            />
          </button>
          <button
            type="button"
            className={`${styles['friends-control-button']} ${styles['like-button']} ${styles['friends-page-number']} `}
          >
            1
          </button>
          <button
            type="button"
            className={`${styles['friends-control-button']} ${styles['like-button_white']} ${styles['friends-pag-button__right']} `}
          >
            <Image
              width={30}
              height={30}
              src="/icons/arrow-right-next.svg"
              alt="arrow right next"
            />
          </button>
          <button
            type="button"
            className={`${styles['friends-control-button']} ${styles['like-button_white']} ${styles['friends-pag-button__right_last']} `}
          >
            <Image
              width={30}
              height={30}
              src="/icons/arrow-right-end.svg"
              alt="arrow right end"
            />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Pets;
