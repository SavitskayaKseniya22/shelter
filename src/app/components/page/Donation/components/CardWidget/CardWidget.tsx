'use client';

import React, { useState } from 'react';
import Button, { ButtonColorType, ButtonContentType } from '@/app/components/shared/Button/Button';
import Image from 'next/image';
import styles from "./card-widget.module.scss"

export default function CardWidget({ content }: { content: string }) {

  const [buttonContent, setButtonContent] = useState(content);

  return <Button
    colorType={ButtonColorType.COLORED}
    contentType={ButtonContentType.STRING}
    disabled={buttonContent === 'Copied!'}
    className={styles["card-widget"]}
    onClick={() => {
      navigator.clipboard
        .writeText(content.split(" ").join(""))
        .then(() => {
          setButtonContent('Copied!');
          return (function delay() {
            return new Promise((resolve) => {
              setTimeout(resolve, 1000);
            });
          })();
        })
        .then(() => {
          setButtonContent(content);
        });
    }}
  >
    <Image
      width={20}
      height={20}
      src="/icons/credit-card.svg"
      alt="card"
    />
    <span className={styles.content}>{buttonContent}</span>
  </Button>

}