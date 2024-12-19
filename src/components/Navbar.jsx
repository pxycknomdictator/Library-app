import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white px-5 py-3 flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl uppercase">Novel Nest</h1>
        <button className="text-white text-2xl md:hidden focus:outline-none"></button>
      </div>
      <nav
        className={`flex-col md:flex-row md:flex md:items-center md:space-x-4`}
      >
        <Link
          to="/"
          className="text-lg text-white hover:text-gray-400 px-2 py-1"
        >
          Book Library
        </Link>
        <Link
          to="/borrowed"
          className="text-lg text-white hover:text-gray-400 px-2 py-1"
        >
          Borrowed Books
        </Link>
      </nav>
    </div>
  );
};
