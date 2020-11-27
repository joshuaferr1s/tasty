import {
  useEffect,
  useState,
  useContext
} from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import { RecipeContext } from '../../RecipeContext';
import RecipeComp from '../../components/RecipeDetail';

function Recipe() {
  const recipes = useContext(RecipeContext);
  let [loading, setLoading] = useState(true);
  let [recipe, setRecipe] = useState(undefined);
  let { recipeSlug } = useParams();

  useEffect(() => {
    let r = recipes.find(el => el.slug === recipeSlug);
    if (r) {
      setRecipe(r);
    }
    setLoading(false);
  }, [recipeSlug, recipes]);

  if (loading) return 'Loading...';
  if (!recipe) return `404 - Not found: ${recipeSlug}`;
  return (
    <div className="page-container">
      <RecipeComp recipe={recipe} />
    </div>
  );
}

export default Recipe;
