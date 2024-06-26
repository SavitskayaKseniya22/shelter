import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';


function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <Image
        
        src="/images/start-screen-gradient-background-768.png"
        fill
        alt="Background"
        style={{
          objectFit: 'cover',
          objectPosition: 'bottom  left',
          right: 'unset',
          top: 'unset',
        }}
        quality={100}
      />

      <div className={`${styles.container} container`}>
        <Image
          src="/images/footer-puppy.png"
          alt="Puppy"
          width={300}
          height={310}
          style={{
            position: 'absolute',
            bottom: '0',
            right: '40px',
          }}
          className={styles.image_dog}
        />
        <section className={styles.contacts}>
          <h3 className={styles.title}>For questions and suggestions</h3>
          <Link href="mailto:email@shelter.com" className={styles.link}>
            <Image
              src="/icons/icon-email.svg"
              width={40}
              height={32}
              alt="Picture of the author"
            />
            email@shelter.com
          </Link>

          <Link href="tel:+136745677554" className={styles.link}>
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
          <h3 className={styles.title}>We are waiting for your visit</h3>

          <Link
            href="https://goo.gl/maps/EDAPioWz4G93bjD1A"
            target="_blank"
            className={styles.link}
          >
            <Image
              src="/icons/icon-marker.svg"
              width={22}
              height={32}
              alt="Picture of the author"
            />
            1 Central Street, Boston (entrance from the store)
          </Link>

          <Link
            href="https://goo.gl/maps/JMV9z4e7cCeDLoC86"
            target="_blank"
            className={styles.link}
          >
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
