'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <Image
        src="/images/start-screen-gradient-background.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background"
      />
      <div className={`${styles.container} container`}>
        <Image
          src="/images/footer-puppy.png"
          layout="fill"
          objectFit="scale-down"
          objectPosition="right bottom"
          quality={100}
          alt="Puppy"
          fill
        />
        <section className={styles.contacts}>
          <h2>For questions and suggestions</h2>
          <Link href="mailto:email@shelter.com">
            <Image
              src="/icons/icon-email.svg"
              width={40}
              height={32}
              alt="Picture of the author"
            />
            email@shelter.com
          </Link>

          <Link href="tel:+136745677554">
            <Image
              src="/icons/icon-phone.svg"
              width={40}
              height={32}
              alt="Picture of the author"
            />
            +13 674 567 75 54
          </Link>
        </section>

        <section className={styles.address}>
          <h2>We are waiting for your visit</h2>

          <Link href="https://goo.gl/maps/EDAPioWz4G93bjD1A" target="_blank">
            <Image
              src="/icons/icon-marker.svg"
              width={22}
              height={32}
              alt="Picture of the author"
            />
            1 Central Street, Boston (entrance from the store)
          </Link>

          <Link href="https://goo.gl/maps/JMV9z4e7cCeDLoC86" target="_blank">
            <Image
              src="/icons/icon-marker.svg"
              width={22}
              height={32}
              alt="Picture of the author"
            />
            18 South Park, London
          </Link>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
