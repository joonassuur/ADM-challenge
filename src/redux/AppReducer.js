const INITIAL_STATE = {
  isSidebarOpen: true,
  shipmentData: undefined,
  selectedCompany: undefined,
  shouldFetch: true,
};
function AppReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "IS_OPEN":
      return {
        ...state,
        isSidebarOpen: action.payload,
      };
    case "SET_SHIPMENT_DATA":
      return {
        ...state,
        shipmentData: action.payload,
      };
    case "SET_SHOULD_FETCH":
      return {
        ...state,
        shouldFetch: action.payload,
      };
    case "MODIFY_BOXES":
      const boxes = action.payload
      return {
        ...state,
        selectedCompany: { ...state.selectedCompany, boxes },
      };
    case "SET_SELECTED_COMPANY":
      return {
        ...state,
        selectedCompany: action.payload,
      };
    default:
      return state;
  }
}
export default AppReducer;
