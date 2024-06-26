import React from "react";
import Image from "next/image";
import { AnimalType, AnimalCartType } from "@/app/interfaces";
import Link from "next/link";
import styles from "./animal-card.module.scss";
import linkStyles from "../Button/button.module.scss";
import stylesDetailed from "../../../animal/[name]/page.module.scss";

function AnimalCard({ animal, type }: { animal: AnimalType; type: AnimalCartType }) {
  const { spriteIndex, name, img, breed, description, age, inoculations, diseases, parasites } = animal;

  if (type === AnimalCartType.SHORT) {
    return (
      <li className={styles.card}>
        <div className={styles.image}>
          <Image
            src="/images/cards/jpg/pets-cards-sprite.jpg"
            alt="Animal"
            fill
            objectFit="cover"
            objectPosition={`0 -${spriteIndex * 270}px`}
          />
        </div>

        <div className={styles.content}>
          <h4>{name}</h4>
          <Link
            href={`/animal/${name}`}
            scroll={false}
            className={`${linkStyles.button} ${linkStyles.white} ${linkStyles.string}`}
          >
            Learn more
          </Link>
        </div>
      </li>
    );
  }

  return (
    <div className={styles["card-detailed"]}>
      <Image className={`${styles.image} ${stylesDetailed.image}`} src={img} alt="Animal" width="270" height="270" />

      <div className={styles.content}>
        <div className={styles.titles}>
          <h3>{name}</h3>
          <h4>{breed}</h4>
        </div>

        <p className={styles.bio}>{description}</p>

        <ul className={styles.characteristics}>
          <li>
            <b>Age: </b> {age}
          </li>
          <li>
            <b>Inoculations: </b>
            {inoculations.join(", ")}
          </li>
          <li>
            <b>Diseases: </b>
            {diseases.join(", ")}
          </li>
          <li>
            <b>Parasites: </b>
            {parasites.join(", ")}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AnimalCard;
