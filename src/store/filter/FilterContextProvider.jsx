import { filterContext } from "./filter.js";

export const FilterContextProvider = ({ children }) => {
  return <filterContext.Provider>{children}</filterContext.Provider>;
};
