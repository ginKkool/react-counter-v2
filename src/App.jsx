import "./App.css";
import { useState } from "react";
import { FaCalculator } from "react-icons/fa";
import CounterV1 from "./components/CounterV1";

const App = () => {
  const [counters, setCounters] = useState([0]);

  return (
    <>
      <header>
        <FaCalculator size={60} />
        <h1>React Counter v2</h1>
      </header>

      <div className="app">
        <button
          className="add-counter"
          onClick={() => {
            const newTab = [...counters];
            newTab.push(0);
            setCounters(newTab);
          }}
        >
          Add counter
        </button>
        <div className="counter-container">
          {counters.map((counter, index) => {
            return <CounterV1 key={index} counter={counter} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
