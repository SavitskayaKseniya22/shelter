import React from 'react';
import Link from 'next/link';
import styles from '../Button/button.module.scss';

export default function BackButton() {
  return <Link href="/" className={`${styles.button} ${styles.colored} ${styles.string}`}>Back to main page</Link>
  
}