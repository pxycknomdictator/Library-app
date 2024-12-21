import { NavLink } from "react-router-dom";

export const Card = ({ book }) => {
  return (
    <NavLink to={`/book/${book.id}`} state={book}>
      <div className="w-full border-b border-gray-500 m-3 cursor-pointer flex items-center justify-center flex-col">
        <img
          src={book.image}
          className="lg:aspect-[7/8.5] h-[300px] md:h-[350px] object-fill  mb-2 shadow-xl border-none outline-none hover:-translate-y-3 transition-transform"
        />
        <p className="text-center text-sm sm:text-base">
          {book.title} by <span className="font-semibold">{book.author}</span>
        </p>
      </div>
    </NavLink>
  );
};
