import React, { useReducer, useContext, createContext } from "react";

export const SomeContext = createContext();

const SomeProvider = ({ children }) => {
  const initialState = {};

  const reducer = (state, action) => {
    const { type } = action;

    switch (type) {
      case "SOME_CONDITION":
      //manipulate state here
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SomeContext.Provider value={{ state, dispatch }}>
      {children}
    </SomeContext.Provider>
  );
};

export default SomeProvider;

export const useSome = () => {
  return useContext(SomeContext);
};
