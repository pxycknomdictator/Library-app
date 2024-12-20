import { useState } from "react";
import { filterContext } from "./filter.js";
import booksData from "../../database/books.json";

export const FilterContextProvider = ({ children }) => {
  const [searchBook, setSearchBook] = useState("");
  const [bookOptions, setBookOptions] = useState("all");

  const filteredBooks = booksData.filter((element) => {
    if (bookOptions === "all") {
      return (
        element.author.toLowerCase().includes(searchBook.toLowerCase()) ||
        element.title.toLowerCase().includes(searchBook.toLowerCase())
      );
    }
    return element.genre.toLowerCase().includes(bookOptions.toLowerCase());
  });

  const dispatch = {
    searchBook,
    setSearchBook,
    filteredBooks,
    bookOptions,
    setBookOptions,
  };

  return (
    <filterContext.Provider value={dispatch}>{children}</filterContext.Provider>
  );
};
