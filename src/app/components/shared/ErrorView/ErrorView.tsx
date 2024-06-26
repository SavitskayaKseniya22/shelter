import React from "react";
import styledButton from "../Button/button.module.scss";
import BackButton from "../BackButton/BackButton";

export default function ErrorView({ reset }: { reset: () => void }) {
  return (
    <>
      <h3>Something went wrong!</h3>
      <button
        type="button"
        onClick={() => reset()}
        className={`${styledButton.button} ${styledButton.white} ${styledButton.string}`}
      >
        Try again
      </button>
      <BackButton />
    </>
  );
}
