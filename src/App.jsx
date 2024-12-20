import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BorrowedBook } from "./pages/Borrowed";
import { BorrowBook } from "./pages/BorrowBook";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/book/:id" element={<BorrowBook />}></Route>
      <Route path="/borrowed" element={<BorrowedBook />}></Route>
    </Routes>
  );
};
