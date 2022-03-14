import React from "react";

function FuncChildComp({counter}) {
  return (
    <div className="appBorder">
      <h2>Function Component</h2>
      {counter}
    </div>
  );
}

export default FuncChildComp;