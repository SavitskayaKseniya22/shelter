"use client";

import { AnimalType } from "@/app/interfaces";
import React, { createContext } from "react";


export interface DataContextType {
  animals: AnimalType[];
}

export const DataContext = createContext<null | DataContextType>({ animals: [] });

export default function DataProvider({
  children,
  value
}: {
  children: React.ReactNode,
  value: DataContextType,
}) {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}