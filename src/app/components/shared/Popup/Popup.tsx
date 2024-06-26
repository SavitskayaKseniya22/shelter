"use client";

import React, { ReactNode, useCallback, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./popup.module.scss";
import Button, { ButtonColorType, ButtonContentType } from "../Button/Button";

function Popup({ children }: { children: ReactNode }) {
  const router = useRouter();

  const closePopup = useCallback(() => {
    router.back();
    document.body.style.overflow = "unset";
  }, [router]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement).classList.contains(`${styles.popup}`)) {
        closePopup();
      }
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePopup();
      }
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [closePopup]);

  return (
    <div className={styles.popup} id="popup">
      <div className={styles.content}>
        <Button
          colorType={ButtonColorType.WHITE}
          contentType={ButtonContentType.SYMBOL}
          onClick={() => {
            closePopup();
          }}
          className={styles.popup__close}
        >
          <Image className={styles.image} src="/icons/icon-cross.svg" alt="Cross" width={12} height={12} />
        </Button>

        {children}
      </div>
    </div>
  );
}

export default Popup;
