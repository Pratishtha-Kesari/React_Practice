import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => setCount((prev) => Math.min(prev + step, 100));
  const decrease = () => setCount((prev) => Math.max(prev - step, 0));
  const reset = () => setCount(0);
  const randomize = () => setCount(Math.floor(Math.random() * 101));

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "#4CAF50" }}>Enhanced Counter App</h1>
      <h2>{count}</h2>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Step:
          <input
            type="number"
            value={step}
            min="1"
            max="10"
            onChange={(e) => setStep(Number(e.target.value))}
            style={{
              marginLeft: "10px",
              width: "50px",
              textAlign: "center",
            }}
          />
        </label>
      </div>

      <button
        onClick={increase}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increase
      </button>

      <button
        onClick={decrease}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          background: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Decrease
      </button>

      <button
        onClick={reset}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          background: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>

      <button
        onClick={randomize}
        style={{
          padding: "10px 20px",
          background: "#FF9800",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Random
      </button>
    </div>
  );
}

export default App;

