import { options } from "../constants/options.js";
import { useFilterContext } from "../utils/filterConsumer.js";

export const Filter = () => {
  const { searchBook, setSearchBook } = useFilterContext();

  return (
    <section className="flex px-7 my-6 gap-6">
      <search className="w-full">
        <input
          className="w-full border-black border outline-none  py-2 px-3 focus-visible:border-blue-500 focus-visible:border-[2.3px]"
          type="text"
          placeholder="Search Book"
          value={searchBook}
          onChange={(event) => setSearchBook(event.target.value)}
        />
      </search>
      <select className="outline-none cursor-pointer bg-transparent px-2 p-2 border border-black rounded-sm w-full sm:w-auto">
        <option value="all">{options.all}</option>
        <option value="Dystopian">{options.Dystopian}</option>
        <option value="Romance">{options.Romance}</option>
        <option value="Fiction">{options.Fiction}</option>
        <option value="Adventure">{options.Adventure}</option>
        <option value="Fantasy">{options.Fantasy}</option>
        <option value="Science Fiction">{options.Science_Fiction}</option>
      </select>
    </section>
  );
};
