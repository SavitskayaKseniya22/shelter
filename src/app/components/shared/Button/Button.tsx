import React, { ReactNode } from 'react';
import styles from './button.module.scss';

enum ButtonColorType {
  COLORED = 'colored',
  WHITE = 'white',
}

enum ButtonContentType {
  STRING = 'string',
  SYMBOL = 'symbol',
}

function Button({
  children,
  colorType,
  contentType,
}: {
  children: ReactNode;
  colorType: ButtonColorType;
  contentType: ButtonContentType;
}) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[colorType]} ${styles[contentType]}`}
    >
      {children}
    </button>
  );
}

export default Button;
