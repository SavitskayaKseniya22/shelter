/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../layout.module.scss';

export function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/">Cozy House</Link>
      <p>Shelter for pets in Boston</p>
    </div>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Logo />

        <input type="checkbox" id={styles['burger-icon']} />

        <label
          htmlFor={styles['burger-icon']}
          className={styles['header-nav__burger']}
        />

        <div className={styles['header-nav__links-wrapper']}>
          <label
            htmlFor={styles['burger-icon']}
            className={`${styles['header-nav__burger-close']} ${styles['header-nav__burger']}`}
          />

          <ul className={styles['header-nav__links']}>
            <li>
              <Link href="/">About the shelter</Link>
            </li>
            <li>
              <Link href="/pets">Our pets</Link>
            </li>
            <li>
              <Link href="/#help">Help the shelter</Link>
            </li>
            <li>
              <Link href="/#contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
