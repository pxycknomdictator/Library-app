import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";
import { Filter } from "../components/Filter";
import { useFilterContext } from "../utils/filterConsumer";

export const Home = () => {
  const { filteredBooks } = useFilterContext();
  return (
    <>
      <Navbar />
      <Wrapper>
        <h1 className="text-3xl text-center my-7 font-semibold">Borrow book</h1>
        <Filter />
        <ul className="w-full place-items-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:gap-4">
          {filteredBooks.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </ul>
      </Wrapper>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};
