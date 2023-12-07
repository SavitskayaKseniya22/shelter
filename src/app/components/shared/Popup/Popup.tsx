'use client';

import React, { ReactNode, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './popup.module.scss';
import Button, { ButtonColorType, ButtonContentType } from '../Button/Button';

function Popup({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleClick = (event: MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains(`${styles.popup}`)) {
      router.back();
    }
  };
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      router.back();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  return (
    <div className={styles.popup} id="popup">
      <div className={styles.content}>
        <Button
          colorType={ButtonColorType.WHITE}
          contentType={ButtonContentType.SYMBOL}
          onClick={() => router.back()}
        >
          <Image
            className={styles.image}
            src="/icons/icon-cross.svg"
            alt="Cross"
            width={12}
            height={12}
          />
        </Button>

        {children}
      </div>
    </div>
  );
}

export default Popup;
