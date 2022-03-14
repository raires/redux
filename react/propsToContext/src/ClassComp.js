import React from "react";
import ClassChildComp from "./ClassChildComp";
import { CounterContext } from "./CounterContext";

class ClassComp extends React.Component {
  render() {
    return (
      <div className="appBorder">
        <h2>Class Component</h2>
        <CounterContext.Consumer>
          {({counter,setCounter}) => {
            return <div>{counter}</div>;
          }}
        </CounterContext.Consumer>
        <ClassChildComp />
      </div>
    );
  }
}

export default ClassComp;