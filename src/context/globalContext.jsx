"use client";
import { createContext, useContext, useState } from "react";

// Context creation
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isFolderEdit, setIsFolderEdit] = useState(false);
  const [isDropdownHome, setIsDropdownHome] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        isFolderEdit,
        setIsFolderEdit,
        isDropdownHome,
        setIsDropdownHome,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
