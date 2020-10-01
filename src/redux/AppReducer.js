
function AppReducer(state = {isSidebarOpen: true}, action) {
  switch (action.type) {
    case "IS_OPEN":
      return {
        ...state, isSidebarOpen: action.payload
    }
    default:
      return state;
  }
}
export default AppReducer;