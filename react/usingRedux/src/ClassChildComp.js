import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset, setTo } from "./redux/counter";

const mapStateToProps = (state) => ({
  count: state.counter.count,
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
  setTo: (value) => dispatch(setTo(value)),
})

class ClassChildComp extends React.Component {
  render() {
    return (
      <div className="appBorder">
        <h2>Class Child Component</h2>
        {/* {this.props.counter} */}
        {this.props.count}
        <br/>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.reset}>reset</button>
        <input type="number" onChange={(e) => this.props.setTo(e.target.value)} />

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassChildComp);