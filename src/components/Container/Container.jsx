import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsSidebarOpen } from "../../redux/Selectors";

import { Main, Header, Sidebar, ShipmentsAPI } from "../Index";
import useStyles from "./Container.styles";

function Container() {
  const classes = useStyles();
  const isSidebarOpen = useSelector(getIsSidebarOpen);

  const [shipmentData, setShipmentData] = useState(undefined);
  const [searchFilter, setSearchFilter] = useState(undefined);

  const filteredResults = shipmentData?.filter((text) => text?.name?.toLowerCase().includes(searchFilter));

  useEffect(() => {
    (async () => {
      const { data } = await ShipmentsAPI.getShipments();

      if (data) setShipmentData(data);
    })();
  }, []);

  return (
    <div className={classes.container}>
      <Header
        searchFilter={searchFilter}
        setSearchFilter={(e) => setSearchFilter(e)}
      />
      <Main isSidebarOpen={isSidebarOpen} shipmentData={shipmentData} />
      <Sidebar
        shipmentData={filteredResults?.length > 0 ? filteredResults : shipmentData}
      />
    </div>
  );
}

export default Container;
