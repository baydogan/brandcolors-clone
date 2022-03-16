import { BrandsContext } from "../context/BrandsContext";
import { useContext } from "react";

export const useBrandsContext = () => {
  const context = useContext(BrandsContext);
  return context;
};
