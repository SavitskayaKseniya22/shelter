import React from 'react';
import styles from './page.module.scss';
import Pagination from './pagination/Pagination';

function Pets() {
  return (
    <main className={styles.pets}>
      <div className={`${styles.container} container`}>
        <h3>
          Our friends who <br />
          are looking for a house
        </h3>
        <Pagination />
      </div>
    </main>
  );
}

export default Pets;
