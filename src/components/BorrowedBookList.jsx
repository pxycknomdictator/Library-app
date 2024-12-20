import { getDataFromLocalStorage } from "../store/addCard/AddCardProvider";

export const BorrowedBooks = () => {
  const books = getDataFromLocalStorage();
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 px-4 text-center">
        Borrowed Books {books.length}
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {books.map((book) => (
          <BorrowedBookList key={book.id} book={book} />
        ))}
      </ul>
    </>
  );
};

const BorrowedBookList = ({ book }) => {
  return (
    <div className="border border-gray-300 shadow-lg rounded-lg p-4">
      <img
        src={book.image}
        alt={book.author}
        className="w-full h-auto object-cover mb-2 rounded-md"
      />
      <h2 className="text-lg md:text-xl font-bold">{book.title}</h2>
      <p className="text-sm md:text-base text-gray-600">by {book.author}</p>
      <button className="w-full bg-red-500 hover:bg-red-600 p-2 text-white mt-2 rounded-md transition duration-300">
        Remove Book
      </button>
    </div>
  );
};
