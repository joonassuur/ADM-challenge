export const setIsOpen = (payload) => {
  return {
    type: "SET_IS_OPEN",
    payload,
  };
};
export const setShouldFetch = (payload) => {
  return {
    type: "SET_SHOULD_FETCH",
    payload,
  };
};
export const setShipmentData = (payload) => {
  return {
    type: "SET_SHIPMENT_DATA",
    payload,
  };
};
export const modifyBoxes = (payload) => {
  return {
    type: "MODIFY_BOXES",
    payload,
  };
};
export const saveShipmentData = () => {
  return {
    type: "SAVE_SHIPMENT_DATA",
  };
};
export const setSelectedCompany = (payload) => {
  return {
    type: "SET_SELECTED_COMPANY",
    payload,
  };
};
