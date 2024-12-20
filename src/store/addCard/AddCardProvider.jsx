import { useState, useEffect } from "react";
import { addCard } from "./addCard";
import { useNavigate } from "react-router-dom";

export const LOCAL_STORAGE_OPTION = "books";

export const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_OPTION) || "[]");
};

export const AddCardProvider = ({ children }) => {
  const navigate = useNavigate();
  const [storeBooks, setStoreBooks] = useState(getDataFromLocalStorage);

  const addNewBook = (newBook) => {
    const is_exists = storeBooks.find((book) => book.id === newBook.id);
    if (is_exists) {
      return;
    }
    setStoreBooks((prev) => [...prev, newBook]);
  };

  const removeBook = (bookId) => {
    setStoreBooks((prev) => prev.filter((book) => book.id !== bookId));
    navigate("/", { replace: true });
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_OPTION, JSON.stringify(storeBooks));
  }, [storeBooks]);

  const dispatch = { addNewBook, removeBook };

  return <addCard.Provider value={dispatch}>{children}</addCard.Provider>;
};
