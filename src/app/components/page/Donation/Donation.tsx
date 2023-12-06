import React from 'react';
import Image from 'next/image';
import styles from './donation.module.scss';

function Donation() {
  return (
    <section className={styles.addition}>
      <div className={`${styles.container} container`}>
        <Image
          width={60}
          height={60}
          src="/images/donation-dog.png"
          alt="dog"
        />
        <div className={styles['addition-content']}>
          <h2>
            You can also <br />
            make a donation
          </h2>
          <h4>Name of the bank / Type of bank account</h4>
          <a href="/" className={styles['like-button']}>
            <Image
              width={20}
              height={20}
              src="/icons/credit-card.svg"
              alt="card"
            />
            8380 2880 8028 8791 7435
          </a>
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
