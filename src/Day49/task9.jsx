import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";


const store = createStore((state = { itemCount: 0 }, action) => {
  switch(action.type) {
    case "ADD_ITEM": return { itemCount: state.itemCount + 1 };
    case "REMOVE_ITEM": return { itemCount: Math.max(state.itemCount - 1, 0) };
    default: return state;
  }
});


function Cart() {
  const dispatch = useDispatch();
  const count = useSelector(s => s.itemCount);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl mb-4">Cart Items: {count}</h2>
      <div className="space-x-4">
        <button onClick={() => dispatch({ type: "ADD_ITEM" })} className="px-4 py-2 bg-green-600 text-white rounded">Add Item</button>
        <button onClick={() => dispatch({ type: "REMOVE_ITEM" })} className="px-4 py-2 bg-red-600 text-white rounded">Remove Item</button>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}
