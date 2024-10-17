import { createContext, useState } from "react";

const INITIAL_STATES = {
  type: "",
  ChangeType: () => {}
};

export const ButtonContext = createContext(INITIAL_STATES);

export default function ButtonContextProvider({ children }) {
  const [type, setType] = useState("cart");

  function ChangeType(text) {
    setType(text);
  }
  const value = {
    type,
    ChangeType
  };
  return (
    <ButtonContext.Provider value={value}>
      {children}
    </ButtonContext.Provider>
  );
}
