'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './donation.module.scss';
import Button, {
  ButtonColorType,
  ButtonContentType,
} from '../../shared/Button/Button';

function Donation() {
  const cardNumber = '8380 2880 8028 8791 7435';
  const [buttonContent, setButtonContent] = useState(cardNumber);

  return (
    <section className={styles.donation}>
      <div className={`${styles.container} container`}>
        <Image
          src="/images/donation-dog.png"
          alt="Dog"
          className={styles.image}
          width={505}
          height={261}
        />
        <div className={styles.content}>
          <h3>
            You can also <br />
            make a donation
          </h3>
          <h5>Name of the bank / Type of bank account</h5>

          <i className={styles.addition}>
            Legal information and lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
            ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </i>
        </div>
      </div>
    </section>
  );
}

export default Donation;
