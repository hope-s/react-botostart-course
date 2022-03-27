import React from "react";
import { connect } from "react-redux";
import { increase } from "../redux/counter/counterActions";

function Mian(props) {
  return (
    <div>
      <h1>counter: {props.counter}</h1>
      <button onClick={props.increase}>increase</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increase()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mian);
