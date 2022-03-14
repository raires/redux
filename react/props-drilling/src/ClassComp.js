import React from "react";
import ClassChildComp from "./ClassChildComp";

class ClassComp extends React.Component {
  render() {
    return (
      <div className="appBorder">
        <h2>Class Component</h2>
        {this.props.counter}
        <ClassChildComp counter={this.props.counter} />
      </div>
    );
  }
}

export default ClassComp;