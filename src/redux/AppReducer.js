const INITIAL_STATE = {
  isSidebarOpen: true,
  shipmentData: undefined,
  selectedCompany: undefined,
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
