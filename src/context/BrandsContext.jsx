import { createContext, useState } from "react";
import BrandData from "../brands.json";

let brandsList = [];

Object.keys(BrandData).forEach((key) => {
  brandsList.push(BrandData[key]);
});

export const BrandsContext = createContext();

export const BrandsProvider = ({ children }) => {
  const [copied, setCopied] = useState({
    value: null,
    copied: false,
  });
  return <BrandsContext.Provider value={{ brandsList, copied, setCopied }}>{children}</BrandsContext.Provider>;
};
