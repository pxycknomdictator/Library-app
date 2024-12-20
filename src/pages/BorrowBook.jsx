import { Link, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";
import { useCardContext } from "../utils/cardConsumer";

export const BorrowBook = () => {
  const { state: book } = useLocation();
  const { setStoreBooks } = useCardContext();

  return (
    <>
      <Navbar />
      <Wrapper>
        <div id="topSection" className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-3 text-center">
            Borrowed Books
          </h1>
          <section className="w-full sm:w-[800px] mx-auto grid grid-cols-2 sm:flex-row m-3 p-4">
            <div className="sm:w-[40%] lg:w-[80%]">
              <img
                src={book.image}
                alt={book.genre}
                className="w-full object-cover shadow-xl rounded-md"
              />
            </div>
            <div className="sm:w-[60%] lg:w-full ml-2 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  {book.title}
                </h2>
                <p className="mb-3 text-lg sm:text-xl">
                  <b>Description: </b>
                  {book.description}
                </p>
                <p className="text-base sm:text-lg">
                  <b>Author: </b>
                  {book.author}
                </p>
                <p className="text-base sm:text-lg">
                  <b>Genre: </b>
                  {book.genre}
                </p>
                <p className="text-base sm:text-lg">
                  <b>Published Year: </b>
                  {book.year}
                </p>
              </div>
              <div className="mt-4">
                <Link to="/borrowed">
                  <button
                    onClick={() => setStoreBooks((prev) => [...prev, book])}
                    className="w-full bg-[#1F1E24] py-2 rounded-md text-white hover:bg-[#33323a] transition-colors"
                  >
                    Borrow Book
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};
