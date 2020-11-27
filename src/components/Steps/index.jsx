import './index.css';

function Steps({ steps }) {
  return (
    <>
      <h2 className="list-title">Steps</h2>
      <ol className="step-list">
        {steps.map((step, index) => (
          <li key={`step-${index}`}>
            <span>{index + 1}.</span><p>{step}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Steps;
