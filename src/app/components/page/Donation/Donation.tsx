'use client';

import React from 'react';
import Image from 'next/image';
import styles from './donation.module.scss';
import Button, {
  ButtonColorType,
  ButtonContentType,
} from '../../shared/Button/Button';

function Donation() {
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
          <h2>
            You can also <br />
            make a donation
          </h2>
          <h4>Name of the bank / Type of bank account</h4>

          <Button
            colorType={ButtonColorType.COLORED}
            contentType={ButtonContentType.SYMBOL}
            onClick={() => {}}
          >
            <Image
              width={20}
              height={20}
              src="/icons/credit-card.svg"
              alt="card"
            />
            <span>8380 2880 8028 8791 7435</span>
          </Button>

          <i>
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
