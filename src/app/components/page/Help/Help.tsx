import React from 'react';
import Image from 'next/image';
import styles from './help.module.scss';

function Help() {
  return (
    <section id="help" className={styles.help}>
      <div className={`${styles.container} container`}>
        <h2>
          How you can help <br />
          our shelter
        </h2>
        <ul className={styles['help-list']}>
          <li>
            <Image
              width={60}
              height={60}
              src="/icons/icon-pet-food.svg"
              alt="pet food"
            />
            <h3>Pet food</h3>
          </li>
          <li>
            <Image
              width={60}
              height={60}
              src="/icons/icon-transportation.svg"
              alt="transportation"
            />
            <h3>Transportation</h3>
          </li>
          <li>
            <Image
              width={60}
              height={60}
              src="/icons/icon-toys.svg"
              alt="toys"
            />
            <h3>Toys</h3>
          </li>
          <li>
            <Image
              width={60}
              height={60}
              src="/icons/icon-bowls-and-cups.svg"
              alt="bowls and cups"
            />

            <h3>Bowls and cups</h3>
          </li>
          <li>
            <Image
              width={60}
              height={60}
              src="/icons/icon-shampoos.svg"
              alt="shampoos"
            />

            <h3>Shampoos</h3>
          </li>
          <li>
            <Image
              width={60}
              height={60}
              src="/icons/icon-vitamins.svg"
              alt="vitamins"
            />
            <h3>Vitamins</h3>
          </li>
          <li>
            <Image
              width={60}
              height={60}
              src="/icons/icon-medicines.svg"
              alt="medicines"
            />

            <h3>Medicines</h3>
          </li>
          <li>
            <Image
              width={60}
              height={60}
              src="/icons/icon-collars-leashes.svg"
              alt="collars and leashes"
            />
            <h3>Collars / leashes</h3>
          </li>
          <li>
            <Image
              width={60}
              height={60}
              src="/icons/icon-sleeping-area.svg"
              alt="sleeping area"
            />

            <h3>Sleeping areas</h3>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Help;
