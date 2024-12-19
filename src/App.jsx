import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BorrowedBook } from "./pages/Borrowed";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/borrowed" element={<BorrowedBook />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
