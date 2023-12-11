'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './logo.module.scss';

function Logo() {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={`${styles.logo} ${
        pathname !== '/' ? styles.regular : styles.primary
      }`}
    >
      <h1>Cozy House</h1>
      <p>Shelter for pets in Boston</p>
    </Link>
  );
}

export default Logo;
