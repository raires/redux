import React from "react";

class ClassChildComp extends React.Component {
  render() {
    return (
      <div className="appBorder">
        <h2>Class Child Component</h2>
        {this.props.counter}
      </div>
    );
  }
}

export default ClassChildComp;