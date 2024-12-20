import { addCard } from "./addCard";

export const AddCardProvider = ({ children }) => {
  return <addCard.Provider>{children}</addCard.Provider>;
};
