import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const BorrowedBook = () => {
  return (
    <>
      <Navbar />
      <div className="pt-5">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 px-4 text-center">
          Borrowed Books
        </h1>
        <div className="absolute w-full bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
};
