import { createContext } from 'react';
import recipes from './recipes.json';

export const RecipeContext = createContext();

function RecipeContextProvider({children}) {
  return (
    <RecipeContext.Provider value={[...recipes]}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
