import React, { /*useState,*/ } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";
import './App.css';

function App() {
  const { count } = useSelector(state => state.counter);
  //const [counter, setCounter] = useState(0);

  // // const increment = () => setCounter(counter + 1);
  // // const decrement = () => setCounter(counter - 1);
  const dispatch = useDispatch();
  const incrementAct = () => dispatch(increment());
  const decrementAct = () => dispatch(decrement());

  return (
    <div className="appBorder">
      <h2>App Component</h2>
      {/* <h3>{counter}</h3> */}
      <h3>{count}</h3>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
      <button onClick={incrementAct}>Increment</button>
      <button onClick={decrementAct}>Decrement</button>
      <hr />
      <ClassComp />
      <hr />
      <FuncComp />
    </div>
  );
}

export default App;

