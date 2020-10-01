import React, { useState, useEffect } from "react";
import { Main, Header, Sidebar, ShipmentsAPI } from "../Index";
import useStyles from "./Container.styles";

function Container() {
  const classes = useStyles();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
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
        setSidebarOpen={() => setSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        searchFilter={searchFilter}
        setSearchFilter={(e) => setSearchFilter(e)}
      />
      <Main isSidebarOpen={isSidebarOpen} shipmentData={filteredResults} />
      <Sidebar
        shipmentData={filteredResults?.length > 0 ? filteredResults : shipmentData}
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={() => setSidebarOpen(!isSidebarOpen)}
      />
    </div>
  );
}

export default Container;
