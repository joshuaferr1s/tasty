import './index.css';

function Ingredients({ ingredients }) {
  return (
    <>
      <h2 className="list-title">Ingredients</h2>
      <ul className="ingredient-list">
        {ingredients.map((ing, index) => (
          <li key={`ingredient-${index}`}>
            {ing}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Ingredients;