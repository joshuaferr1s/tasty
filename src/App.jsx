import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import RecipeContextProvider from './RecipeContext';
import Recipes from './views/Recipes';
import Recipe from './views/Recipe';

function App() {
  return (
    <Router>
      <RecipeContextProvider>
      {/* Navbar */}
        <Switch>
          <Route exact path="/">
            <Recipes />
          </Route>
          <Route path="/:recipeSlug">
            <Recipe />
          </Route>
        </Switch>
      </RecipeContextProvider>
    </Router>
  );
}

export default App;
