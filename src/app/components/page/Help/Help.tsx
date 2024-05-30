'use client';

import React from 'react';
import styles from './help.module.scss';

const data = [
  { title: 'Pet food', id: 'icon-pet-food' },
  {
    title: 'Transportation',
    id: 'icon-transportation',
  },
  { title: 'Toys', id: 'icon-toys' },
  {
    title: 'Bowls and cups',
    id: 'icon-bowls-and-cups',
  },
  { title: 'Shampoos', id: 'icon-shampoos' },
  { title: 'Vitamins', id: 'icon-vitamins' },
  {
    title: 'Medicines',
    id: 'icon-medicines',
  },
  {
    title: 'Collars / leashes',
    id: 'icon-bowls-and-cups',
  },
  {
    title: 'Sleeping areas',
    id: 'icon-sleeping-area',
  },
];

function HelpItem({ title, id }: { title: string; id: string }) {
  return (
    <li className={styles['help-item']}>
      <svg>
        <use href={`/icons/icon-help-sprite.svg#${id}`} />
      </svg>
      <h4>{title}</h4>
    </li>
  );
}

function Help() {
  return (
    <section id="help">
      <div className={`${styles.container} container`}>
        <h3>
          How you can help <br />
          our shelter
        </h3>
        <ul className={styles['help-list']}>
          {data.map((item) => (
            <HelpItem id={item.id} title={item.title} key={item.title} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Help;
