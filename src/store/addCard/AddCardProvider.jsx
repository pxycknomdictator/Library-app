import { addCard } from "./addCard.js";

export const AddCardProvider = ({ children }) => {
  return <addCard.Provider>{children}</addCard.Provider>;
};
