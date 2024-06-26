import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./first-screen.module.scss";
import linkStyles from "../../shared/Button/button.module.scss";

function FirstScreen() {
  return (
    <section className={styles["first-screen"]}>
      <Image
        src="/images/start-screen-gradient-background-768.png"
        priority
        fill
        style={{
          objectFit: "cover",
          objectPosition: "bottom left",
          right: "unset",
          top: "unset",
        }}
        quality={100}
        alt="background"
        className={styles.image_background}
      />

      <div className={`container ${styles.container}`}>
        <Image
          src="/images/start-screen-puppy-700.png"
          priority
          alt="Puppy"
          className={styles.image_main}
          quality={75}
          fill
          style={{
            top: "unset",
            left: "unset",
            bottom: 0,
          }}
        />

        <h2>
          Not only people
          <br />
          need a house
        </h2>
        <p className={styles.addition}>
          We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will
          love you more than anybody else in the world, you will see!
        </p>

        <Link href="/#friends" className={`${linkStyles.button} ${linkStyles.colored} ${linkStyles.string}`}>
          Make a friend
        </Link>
      </div>
    </section>
  );
}

export default FirstScreen;
