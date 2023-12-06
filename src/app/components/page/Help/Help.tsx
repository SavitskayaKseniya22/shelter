import React from 'react';
import Image from 'next/image';
import styles from './help.module.scss';

const data = [
  { title: 'Pet food', src: '/icons/icon-pet-food.svg' },
  { title: 'Transportation', src: '/icons/icon-transportation.svg' },
  { title: 'Toys', src: '/icons/icon-toys.svg' },
  { title: 'Bowls and cups', src: '/icons/icon-bowls-and-cups.svg' },
  { title: 'Shampoos', src: '/icons/icon-shampoos.svg' },
  { title: 'Vitamins', src: '/icons/icon-vitamins.svg' },
  { title: 'Medicines', src: '/icons/icon-medicines.svg' },
  { title: 'Collars / leashes', src: '/icons/icon-collars-leashes.svg' },
  { title: 'Sleeping areas', src: '/icons/icon-sleeping-area.svg' },
];

function HelpItem({ title, src }: { title: string; src: string }) {
  return (
    <li className={styles['help-item']}>
      <Image width={60} height={60} src={src} alt={title} />
      <h3>{title}</h3>
    </li>
  );
}

function Help() {
  return (
    <section id="help">
      <div className={`${styles.container} container`}>
        <h2>
          How you can help <br />
          our shelter
        </h2>
        <ul className={styles['help-list']}>
          {data.map((item) => (
            <HelpItem title={item.title} src={item.src} key={item.title} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Help;
