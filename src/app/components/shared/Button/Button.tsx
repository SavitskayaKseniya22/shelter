/* eslint-disable react/require-default-props */

import React, { ReactNode } from "react";
import styles from "./button.module.scss";

export enum ButtonColorType {
  COLORED = "colored",
  WHITE = "white",
}

export enum ButtonContentType {
  STRING = "string",
  SYMBOL = "symbol",
}

function Button({
  children,
  colorType,
  contentType,
  onClick,
  disabled = false,
  className = "",
}: {
  children: ReactNode;
  colorType: ButtonColorType;
  contentType: ButtonContentType;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`${styles.button} ${styles[colorType]} ${styles[contentType]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
