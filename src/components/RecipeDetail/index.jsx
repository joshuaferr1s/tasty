import { useHistory } from 'react-router-dom';
import './index.css';
import Ingredients from '../Ingredients';
import Steps from '../Steps';
import Notes from '../Notes';

function RecipeDetail({recipe}) {
  const history = useHistory();

  return (
    <div className="recipeDetail">
      <div className="leftPanel">
        <h1 className="title">{recipe.name}</h1>
        <p className="info">{recipe.ttm} minutes | {recipe.servings} Servings</p>
        <hr />
        <Ingredients ingredients={recipe.ingredients} />
      </div>
      <div className="rightPanel">
        <Steps steps={recipe.steps} />
      </div>
      <div className="bottomPanel">
        {recipe.notes && <Notes notes={recipe.notes} />}
        <button className="backLink" onClick={() => history.push('/')}> Back to recipes</button>
      </div>
    </div>
  );
}

export default RecipeDetail;