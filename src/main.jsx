import { createRoot } from "react-dom/client";
import { FilterContextProvider } from "./store/filter/FilterContextProvider.jsx";
import { AddCardProvider } from "./store/addCard/AddCardProvider.jsx";
import { App } from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <FilterContextProvider>
    <AddCardProvider>
      <App />
    </AddCardProvider>
  </FilterContextProvider>
);
