export const isOpen = (payload) => {
  return {
    type: "IS_OPEN", 
    payload
  };
};
export const setShipmentData = (payload) => {
  return {
    type: "SET_SHIPMENT_DATA", 
    payload
  };
};
export const setSelectedCompany = (payload) => {
    console.log(payload)
  return {
    type: "SET_SELECTED_COMPANY", 
    payload
  };
};
