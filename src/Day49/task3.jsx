
import React from "react";
import { useDispatch } from "react-redux";

function CounterComponent() {
  const dispatch = useDispatch();


  const incrementAction = {
    type: "INCREMENT",
    payload: 1
  };

  return (
    <button onClick={() => dispatch(incrementAction)}>
      Increment
    </button>
  );
}

export default CounterComponent;
