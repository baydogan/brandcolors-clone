import { createContext, useState } from "react";
import BrandData from "../brands.json";

let brandCollection = [];

Object.keys(BrandData).forEach((key) => {
  brandCollection.push(BrandData[key]);
});

export const BrandsContext = createContext();

export const BrandsProvider = ({ children }) => {
  return <BrandsContext.Provider value={{ brandCollection }}>{children}</BrandsContext.Provider>;
};
