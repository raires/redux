import React from "react";
import { useSelector } from "react-redux";
import FuncChildComp from "./FuncChildComp";

function FuncComp() {
  //const { counter } = useSelector(state => state.counter);
  const { count } = useSelector(state => state.counter);

  return (
    <div className="appBorder">
      <h2>Function Component</h2>
      {/* {counter} */}
      {count}
      <FuncChildComp />
    </div>
  );
}

export default FuncComp;