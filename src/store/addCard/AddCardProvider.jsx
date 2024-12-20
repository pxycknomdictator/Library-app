import { useState } from "react";
import { addCard } from "./addCard";
import { useEffect } from "react";

export const LOCAL_STORAGE_OPTION = "books";

export const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_OPTION) || "[]");
};

export const AddCardProvider = ({ children }) => {
  const [storeBooks, setStoreBooks] = useState(getDataFromLocalStorage);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_OPTION, JSON.stringify(storeBooks));
  }, [storeBooks]);

  const addNewBook = (newBook) => {
    const is_exists = storeBooks.find((book) => book.id === newBook.id);
    if (is_exists) {
      return;
    }
    setStoreBooks((prev) => [...prev, newBook]);
  };

  const dispatch = { setStoreBooks, addNewBook };

  return <addCard.Provider value={dispatch}>{children}</addCard.Provider>;
};
