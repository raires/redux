import React from "react";
import { CounterContext } from "./CounterContext";

class ClassChildComp extends React.Component {
  render() {
    return (
      <div className="appBorder">
        <h2>Class Child Component</h2>
        <CounterContext.Consumer>
          {({counter,setCounter}) => {
            return (
              <div>
                {counter}
                <hr />
                <button onClick={() => setCounter(counter - 1)}>--</button>
              </div>
            );
          }}
        </CounterContext.Consumer>
        
      </div>
    );
  }
}

export default ClassChildComp;