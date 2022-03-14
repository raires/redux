import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setTo } from "./redux/counter";

function FuncChildComp() {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  return (
    <div className="appBorder">
      <h2>Function Child Component</h2>
      {/* {counter} */}
      {count}
      <hr/>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(setTo(10))}>set to 10</button>
    </div>
  );
}

export default FuncChildComp;