import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";
import books from "../database/books.json";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <ul className="grid grid-cols-3">
          {books.map(({ id, ...book }) => (
            <Card key={id} book={book} />
          ))}
        </ul>
      </Wrapper>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};
