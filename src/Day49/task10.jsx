// React
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// redux
// Store and Reducer
const store = createStore((state = { count: 0 }, action) => {
  switch(action.type) {
    case "INCREMENT": return { count: state.count + 1 };
    default: return state;
  }
});

// Component
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
    </div>
  );
}
