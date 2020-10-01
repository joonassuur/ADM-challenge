function AppReducer(state = 0, action) {
  switch (action.type) {
    case "IS_OPEN":
      return true;
    default:
      return state;
  }
}
export default AppReducer;