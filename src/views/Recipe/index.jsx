import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import { Context } from '../../Store';
import RecipeComp from '../../components/RecipeDetail';

function Recipe() {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useContext(Context);
  let [loading, setLoading] = useState(true);
  let [recipe, setRecipe] = useState(undefined);
  let { recipeSlug } = useParams();

  useEffect(() => {
    let r = state.recipes.find(el => el.slug === recipeSlug);
    if (r) {
      setRecipe(r);
    }
    setLoading(false);
  }, [recipeSlug, state.recipes]);

  if (loading || state.loading) {
    return (
      <div className="page-container recipe-detail">
        <p className="message">Loading...</p>
      </div>
    );
  }
  if (!recipe) {
    return (
      <div className="page-container recipe-detail">
        <p className="message">Recipe not found: {recipeSlug}</p>
      </div>
    );
  };
  return (
    <div className="page-container recipe-detail">
      <RecipeComp recipe={recipe} />
    </div>
  );
}

export default Recipe;
