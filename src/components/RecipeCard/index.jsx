import {
  useHistory
} from 'react-router-dom';
import './index.css';

function RecipeCard({ recipe }) {
  let history = useHistory();

  return (
    <div
      className="recipe"
      onClick={() => history.push(recipe.slug)}
      key={recipe.slug}
    >
      <h2>{recipe.name}</h2>
      <p>{recipe.ttm} minutes | {recipe.servings} servings</p>
    </div>
  );
}

export default RecipeCard;