import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "./store/filter/FilterContextProvider.jsx";
import { AddCardProvider } from "./store/addCard/AddCardProvider.jsx";
import { App } from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FilterContextProvider>
      <AddCardProvider>
        <App />
      </AddCardProvider>
    </FilterContextProvider>
  </BrowserRouter>
);
