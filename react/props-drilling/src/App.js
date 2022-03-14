import React, {useState} from "react";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div className="appBorder">
      <h2>App Component</h2>
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <ClassComp counter={counter} />
      <hr />
      <FuncComp counter={counter} />
    </div>
  );
}

export default App;

