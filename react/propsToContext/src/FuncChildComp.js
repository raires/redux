import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

function FuncChildComp() {
  const {counter,setCounter} = useContext(CounterContext);
  return (
    <div className="appBorder">
      <h2>Function Component</h2>
      {counter}
      <hr />
      <button onClick={()=>setCounter(counter+1)}>+</button>
    </div>
  );
}

export default FuncChildComp;