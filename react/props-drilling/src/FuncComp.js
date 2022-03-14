import React from "react";
import FuncChildComp from "./FuncChildComp";

function FuncComp({counter}) {
  return (
    <div className="appBorder">
      <h2>Function Component</h2>
      {counter}
      <FuncChildComp counter={counter} />
    </div>
  );
}

export default FuncComp;