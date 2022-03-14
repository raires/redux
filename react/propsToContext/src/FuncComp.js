import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";
import FuncChildComp from "./FuncChildComp";

function FuncComp() {
  const {counter} = useContext(CounterContext);
  return (
    <div className="appBorder">
      <h2>Function Component</h2>
      {counter}
      <FuncChildComp counter={counter} />
    </div>
  );
}

export default FuncComp;