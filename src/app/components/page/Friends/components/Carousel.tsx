"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import AnimalCard from "@/app/components/shared/AnimalCard/AnimalCard";
import Button, { ButtonColorType, ButtonContentType } from "@/app/components/shared/Button/Button";
import { AnimalCartType } from "@/app/interfaces";
import { DataContext } from "@/app/components/shared/AnimalsContainer/provider";
import InfoBox from "@/app/components/shared/InfoBox/InfoBox";
import CarouselData, { DirectionType } from "./CarouselData";
import styles from "./carousel.module.scss";

export default function Carousel() {
  const contextData = useContext(DataContext);
  const [animals] = useState<CarouselData>(new CarouselData(contextData?.animals || []));

  const [animation, setAnimation] = useState(false);

  const direction = useRef<DirectionType | null>(null);

  useEffect(() => {
    if (animation && animals) {
      setTimeout(() => {
        setAnimation(false);
        if (direction.current === DirectionType.LEFT) {
          animals.updateRowLeft();
        } else if (direction.current === DirectionType.RIGHT) {
          animals.updateRowRight();
        }
      }, 1000);
    }
  }, [animals, animation]);

  return (
    <div className={styles.carousel}>
      {!animals.getLength() && <InfoBox>No pets found</InfoBox>}
      {!!animals.getLength() && (
        <>
          <Button
            colorType={ButtonColorType.WHITE}
            contentType={ButtonContentType.SYMBOL}
            onClick={() => {
              direction.current = DirectionType.LEFT;
              setAnimation(true);
            }}
            disabled={animation}
          >
            <svg height={15}>
              <use href="/icons/icon-arrows-sprite.svg#icon-arrow-left" />
            </svg>
          </Button>

          <div className={styles.window}>
            <ul className={animation ? styles[`animation-${direction.current}`] : ""}>
              {animals.rowPrevPart.map((animal) => {
                const key = Math.random();
                return <AnimalCard animal={animal} key={key} type={AnimalCartType.SHORT} />;
              })}
            </ul>

            <ul className={animation ? styles[`animation-${direction.current}`] : ""}>
              {animals.rowActivePart.map((animal) => {
                const key = Math.random();
                return <AnimalCard animal={animal} key={key} type={AnimalCartType.SHORT} />;
              })}
            </ul>

            <ul className={animation ? styles[`animation-${direction.current}`] : ""}>
              {animals.rowNextPart.map((animal) => {
                const key = Math.random();
                return <AnimalCard animal={animal} key={key} type={AnimalCartType.SHORT} />;
              })}
            </ul>
          </div>

          <Button
            colorType={ButtonColorType.WHITE}
            contentType={ButtonContentType.SYMBOL}
            onClick={() => {
              direction.current = DirectionType.RIGHT;
              setAnimation(true);
            }}
            disabled={animation}
          >
            <svg height={15}>
              <use href="/icons/icon-arrows-sprite.svg#icon-arrow-right" />
            </svg>
          </Button>
        </>
      )}
    </div>
  );
}
