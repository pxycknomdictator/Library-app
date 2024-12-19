import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="absolute w-full bottom-0">
        <Footer />
      </div>
    </>
  );
};
