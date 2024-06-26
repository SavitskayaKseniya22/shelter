import React, { ReactNode } from "react";
import BackButton from "../BackButton/BackButton";
import styles from "./info-box.module.scss";

export default function InfoBox({ children }: { children: ReactNode }) {
  return (
    <div className={styles["info-box"]}>
      <h4>{children}</h4>
      <BackButton />
    </div>
  );
}
