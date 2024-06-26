import React from "react";
import Animal from "@/app/components/shared/Animal/Animal";
import styles from "./page.module.scss";

async function Page({
  params,
}: {
  params: {
    name: string;
  };
}) {
  return (
    <main className={styles.main}>
      <Animal params={params} />
    </main>
  );
}

export default Page;
