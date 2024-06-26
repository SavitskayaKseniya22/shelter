import React from 'react';
import Link from 'next/link';
import styles from './friends.module.scss';
import linkStyles from '../../shared/Button/button.module.scss';
import Carousel from './components/Carousel';
import AnimalsContainer from '../../shared/AnimalsContainer/AnimalsContainer';

function Friends() {
  


  return (
    <section className={styles.friends} id="friends">
      <div className={`${styles.container} container`}>
        <h3>
          Our friends who <br />
          are looking for a house
        </h3>

        <AnimalsContainer>
           <Carousel />
        </AnimalsContainer>

       
        <Link href="/pets" className={`${linkStyles.button} ${linkStyles.colored} ${linkStyles.string}`}>Get to know the rest</Link>
      </div>
    </section>
  );
}

export default Friends;
