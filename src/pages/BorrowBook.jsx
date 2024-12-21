import { Link, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";
import { useCardContext } from "../utils/cardConsumer";

export const BorrowBook = () => {
  const { state: book } = useLocation();
  const { addNewBook } = useCardContext();

  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-3 text-center">
            Borrowed Books
          </h1>

          <section className="w-full space-y-5 md:space-y-0 md:flex md:gap-8 lg:gap-6 mt-10 lg:w-[70%] mx-auto">
            <div className="w-full mx-auto md:w-[50%] lg:w-[40%]">
              <img
                src={book.image}
                alt={book.genre}
                className="w-full object-cover shadow-xl rounded-md"
              />
            </div>

            <div className="flex text-[1.1rem] md:text-[1.12rem]">
              <div className="space-y-1.5 relative">
                <span className="block">
                  <b>Title: </b>
                  {book.title}
                </span>
                <span className="block">
                  <b>Description: </b>
                  {book.description}
                </span>
                <span className="block">
                  <b>Author: </b>
                  {book.author}
                </span>
                <span className="block">
                  <b>Genre: </b>
                  {book.genre}
                </span>
                <span className="block">
                  <b>Published Year: </b>
                  {book.year}
                </span>
                <Link to="/borrowed">
                  <button
                    onClick={() => addNewBook(book)}
                    className="w-full bg-[#1F1E24] block md:absolute md:bottom-0 mt-6 py-2 rounded-md text-white hover:bg-[#33323a] transition-colors"
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
