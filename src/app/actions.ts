"use server";

import { AnimalType } from "./interfaces";

export default async function getData() {
  let data: { animals: AnimalType[] } | undefined;
  let isError = false;
  let error = "";

  try {
    const res = await fetch("http://localhost:3001/api/animals");
    data = await res.json();
  } catch (e) {
    isError = true;
    if (typeof e === "string") {
      error = e;
    } else if (e instanceof Error) {
      error = e.message;
    } else {
      error = "Error";
    }
  }

  return { data, isError, error };
}
