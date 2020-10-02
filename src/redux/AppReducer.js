import _ from "lodash";
const INITIAL_STATE = {
  isSidebarOpen: true,
  shipmentData: undefined,
  selectedCompany: undefined,
  shouldFetch: true,
};
function AppReducer(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case "SET_IS_OPEN":
      return {
        ...state,
        isSidebarOpen: payload,
      };
    case "SET_SHIPMENT_DATA":
      return {
        ...state,
        shipmentData: payload,
      };
    case "SET_SHOULD_FETCH":
      return {
        ...state,
        shouldFetch: payload,
      };
    case "MODIFY_BOXES":
      const boxes = payload;
      return {
        ...state,
        selectedCompany: { ...state.selectedCompany, boxes },
      };
    case "SAVE_SHIPMENT_DATA":
      // clone shipment data (shipments.json) for editing
      const shipmentData = _.clone(state.shipmentData);
      // find the index of currently selected company from the list of all companies
      const index = shipmentData.findIndex(({ id }) => id === state.selectedCompany.id);
      // swap the modified selected company in the list of all companies
      shipmentData[index] = state.selectedCompany;

      return {
        ...state,
        shipmentData,
      };
    case "SET_SELECTED_COMPANY":
      return {
        ...state,
        selectedCompany: payload,
      };
    default:
      return state;
  }
}
export default AppReducer;
