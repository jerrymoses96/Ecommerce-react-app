import { createContext, useContext, useState } from "react";

const PathContext = createContext();

export const usePathContext = () => {
    return useContext(PathContext);
}

export const PathProvider = ({ children }) => {
  const [pathname, setPathname] = useState(null);

  return (
    <PathContext.Provider value={{ pathname, setPathname }}>
      {children}
    </PathContext.Provider>
  );
};
