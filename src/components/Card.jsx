export const Card = ({ book }) => {
  return (
    <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[350px] border-b border-gray-500 m-3 p-4 cursor-pointer">
      <img
        src={book.image}
        className="w-full h-[300px] md:h-[350px] object-cover mb-2 shadow-xl border border-gray-400 rounded-md hover:-translate-y-3 transition-transform"
      />
      <p className="text-center text-sm sm:text-base">
        {book.title} by <span className="font-semibold">{book.author}</span>
      </p>
    </div>
  );
};
