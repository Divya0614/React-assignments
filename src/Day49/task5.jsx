function counterReducer(state, action) {
  switch(action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
}
