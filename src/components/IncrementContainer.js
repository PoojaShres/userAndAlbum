import React from "react";
import { connect } from "react-redux";
// import logo from "../logo.svg";
import { ageValueIncrement, ageValueDecrement, ageValueDel } from "./index";

function IncrementContainer(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h1>Your Age - {props.ageValue}</h1>
          <button
            onClick={props.ageValueIncrement}
            className="btn btn-block btn-success mt-3"
          >
            Increment Age
          </button>
          <button
            onClick={props.ageValueDecrement}
            className="btn btn-block btn-success mt-3"
          >
            Decrement Age
          </button>

          <hr></hr>

          <h2>History</h2>
          <div>
            <ul>
              {props.history.map(element => (
                <li
                  key={element.id}
                  onClick={() => props.onDelItem(element.id)}
                >
                  {element.ageValue}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ageValue: state.age.ageValue,
    history: state.age.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ageValueIncrement: () => dispatch(ageValueIncrement(1)),
    ageValueDecrement: () => dispatch(ageValueDecrement(1)),
    onDelItem: id => dispatch(ageValueDel(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncrementContainer);
