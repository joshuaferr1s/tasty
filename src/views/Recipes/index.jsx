import { useContext } from 'react';
import { Context } from '../../Store';
import RecipeCard from '../../components/RecipeCard';
import './index.css';

function Recipes() {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useContext(Context);

  return (
    <div className="page-container">
      <div className="recipes">
        {state.recipes.map(recipe => <RecipeCard recipe={recipe} />)}
      </div>
    </div >
  );
}

export default Recipes;
