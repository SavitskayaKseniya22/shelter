import React, { ReactNode } from 'react';
import styles from './button.module.scss';

export enum ButtonColorType {
  COLORED = 'colored',
  WHITE = 'white',
}

export enum ButtonContentType {
  STRING = 'string',
  SYMBOL = 'symbol',
}

function Button({
  children,
  colorType,
  contentType,
  onClick,
}: {
  children: ReactNode;
  colorType: ButtonColorType;
  contentType: ButtonContentType;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[colorType]} ${styles[contentType]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
