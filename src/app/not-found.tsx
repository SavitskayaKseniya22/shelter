import React from "react";
import styled from "./error.module.scss";
import BackButton from "./components/shared/BackButton/BackButton";

export default function NotFound() {
  return (
    <main className={styled.main}>
      <h3>Not Found</h3>
      <BackButton />
    </main>
  );
}
