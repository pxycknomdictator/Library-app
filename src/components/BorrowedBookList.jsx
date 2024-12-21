import { getDataFromLocalStorage } from "../store/addCard/AddCardProvider";
import { useCardContext } from "../utils/cardConsumer";
import { Wrapper } from "../components/Wrapper";

export const BorrowedBooks = () => {
  const books = getDataFromLocalStorage();
  return (
    <>
      {books.length !== 0 ? (
        <h4 className="text-2xl md:text-3xl font-semibold mb-4 px-4 text-center">
          Borrowed Books {books.length}
        </h4>
      ) : (
        <h4 className="text-2xl md:text-3xl font-semibold mb-4 px-4 text-center">
          No books borrowed yet
        </h4>
      )}
      <Wrapper>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-10">
          {books.map((book) => (
            <BorrowedBookList key={book.id} book={book} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

const BorrowedBookList = ({ book }) => {
  const { removeBook } = useCardContext();

  return (
    <div className="border border-gray-300 shadow-lg rounded-lg p-4">
      <img
        src={book.image}
        alt={book.author}
        className="w-full aspect-[5/6] mb-2 rounded-md"
      />
      <h2 className="text-lg md:text-[1.1rem] font-semibold">{book.title}</h2>
      <p className="text-sm md:text-base text-gray-600">
        written by:{" "}
        <span className="text-gray-700 font-semibold">{book.author}</span>
      </p>
      <button
        onClick={() => removeBook(book.id)}
        className="w-full bg-red-500 hover:bg-red-600 font-semibold p-2 text-white mt-2 rounded-sm transition duration-300"
      >
        Remove Book
      </button>
    </div>
  );
};
