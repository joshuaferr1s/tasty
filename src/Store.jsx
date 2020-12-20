import { createContext, useState } from 'react';

export const Context = createContext();

const Store = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    recipes: [],
  });

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
