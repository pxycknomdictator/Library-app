import { useContext } from "react";
import { addCard } from "../store/addCard/addCard.js";

export const useCardContext = () => {
  const data = useContext(addCard);
  if (!data) {
    throw new Error("Card Context is Empty");
  }
  return data;
};
