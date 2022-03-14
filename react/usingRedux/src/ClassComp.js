import React from "react";
import ClassChildComp from "./ClassChildComp";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  count: state.counter.count,
})

class ClassComp extends React.Component {
  render() {
    return (
      <div className="appBorder">
        <h2>Class Component</h2>
        {/* {this.props.counter} */}
        {this.props.count}
        <ClassChildComp />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ClassComp);