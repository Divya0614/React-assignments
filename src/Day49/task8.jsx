import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";


const store = createStore((state = { theme: "light" }, action) => {
  if (action.type === "TOGGLE_THEME") {
    return { theme: state.theme === "light" ? "dark" : "light" };
  }
  return state;
});


function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector(s => s.theme);
  return (
    <div className={theme === "dark" ? "bg-gray-800 text-white h-screen flex items-center justify-center" : "bg-white text-black h-screen flex items-center justify-center"}>
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </div>
  );
}


export default function App() {
  return (
    <Provider store={store}>
      <ThemeToggle />
    </Provider>
  );
}
