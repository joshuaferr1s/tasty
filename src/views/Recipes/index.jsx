import { useContext } from 'react';
import { RecipeContext } from '../../RecipeContext';
import RecipeCard from '../../components/RecipeCard';
import './index.css';

function Recipes() {
  const recipes = useContext(RecipeContext);

  return (
    <div className="page-container">
      <h1 className="title">Recipes</h1>
      <div className="recipes">
        {recipes.map(recipe => <RecipeCard recipe={recipe} />)}
      </div>
    </div >
  );
}

export default Recipes;
