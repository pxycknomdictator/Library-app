import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { BorrowedBooks } from "../components/BorrowedBookList";

export const BorrowedBook = () => {
  return (
    <>
      <Navbar />
      <div className="pt-5">
        <BorrowedBooks />
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};
