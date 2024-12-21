import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white px-5 py-3 text-center md:flex md:justify-between">
      <Link to="/" className="text-2xl font-semibold uppercase">
        Book Mania
      </Link>
      <nav className="mt-4 text-[1rem] md:text-[1.1rem] md:mt-0">
        <Link to="/" className="text-white hover:text-gray-400 px-2 py-1">
          Library
        </Link>
        <Link
          to="/borrowed"
          className="text-white hover:text-gray-400 px-2 py-1"
        >
          Borrowed Books
        </Link>
      </nav>
    </header>
  );
};
