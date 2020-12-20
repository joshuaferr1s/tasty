import { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Context } from './Store';
import Navbar from './components/Navbar';
import Recipes from './views/Recipes';
import Recipe from './views/Recipe';

function App() {
  const [state, setState] = useContext(Context);

  useEffect(() => {
    async function getData() {
      const res = await fetch('/api/recipes');
      const data = await res.json();
      const recipes = data.map(el => el.data);
      setState({
        loading: false,
        recipes,
      });
    }
    getData();
  }, [setState]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Recipes />
        </Route>
        <Route path="/:recipeSlug">
          <Recipe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
