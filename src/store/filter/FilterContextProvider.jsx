import { useState } from "react";
import { filterContext } from "./filter.js";
import booksData from "../../database/books.json";

export const FilterContextProvider = ({ children }) => {
  const [books, _] = useState(booksData);
  const [searchBook, setSearchBook] = useState("");
  const [bookOptions, setBookOptions] = useState("");

  const filteredBooks = books.filter((element) =>
    element.author.toLowerCase().includes(searchBook.toLowerCase())
  );

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
