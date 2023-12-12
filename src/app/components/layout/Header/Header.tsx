/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';
import NavLink from '../../shared/NavLink/NavLink';
import Logo from '../Logo/Logo';

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        (target.classList.contains(`${styles.navigation}`) ||
          target.tagName === 'A')
      ) {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    const handleResize = (e: Event) => {
      if ((e.target as Window).innerWidth > 767 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <header
      className={`${styles.header} ${
        pathname !== '/' ? styles.regular : styles.primary
      }`}
    >
      <div className={`${styles.container} container`}>
        <Logo />

        <input
          type="checkbox"
          id={styles['burger-icon']}
          checked={isOpen}
          onChange={(e) => {
            setIsOpen(e.target.checked);
            document.body.style.overflow = e.target.checked
              ? 'hidden'
              : 'unset';
          }}
        />

        <label
          htmlFor={styles['burger-icon']}
          className={styles.navigation__burger}
        />

        <div className={styles.navigation}>
          <label
            htmlFor={styles['burger-icon']}
            className={`${styles['navigation__burger-close']} ${styles.navigation__burger}`}
          />

          <ul className={styles.navigation__content}>
            <li>
              <NavLink href="/">About the shelter</NavLink>
            </li>
            <li>
              <NavLink href="/pets">Our pets</NavLink>
            </li>
            <li>
              <NavLink href="/#help">Help the shelter</NavLink>
            </li>
            <li>
              <NavLink href="/#contacts">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
