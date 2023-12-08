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
  disabled,
}: {
  children: ReactNode;
  colorType: ButtonColorType;
  contentType: ButtonContentType;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`${styles.button} ${styles[colorType]} ${styles[contentType]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
};

export default Button;
