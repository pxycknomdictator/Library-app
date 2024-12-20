import { useContext } from "react";
import { filterContext } from "../store/filter/filter.js";

export const useFilterContext = () => {
  const data = useContext(filterContext);
  if (!data) {
    throw new Error("Card Context is Empty");
  }
  return data;
};
