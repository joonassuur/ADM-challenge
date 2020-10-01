import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShipmentData } from "../../redux/Selectors";
import { setShipmentData } from "../../redux/AppActions";

import { Main, Header, Sidebar, ShipmentsAPI } from "../Index";
import useStyles from "./Container.styles";

function Container() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const shipmentData = useSelector(getShipmentData)
  const [shouldFetch, setShouldFetch] = useState(true)

  const [searchFilter, setSearchFilter] = useState(undefined);
  const filteredResults = shipmentData?.filter((text) => text?.name?.toLowerCase().includes(searchFilter));

  useEffect(() => {
    (async () => {
      if (shouldFetch) {
        const { data } = await ShipmentsAPI.getShipments();
        if (data && !shipmentData) dispatch(setShipmentData(data));

        setShouldFetch(false)
      }
    })();
  }, [dispatch, shipmentData, shouldFetch]);

  return (
    <div className={classes.container}>
      <Header
        setShouldFetch={()=>setShouldFetch(true)}
        searchFilter={searchFilter}
        setSearchFilter={(e) => setSearchFilter(e)}
      />
      <Main shipmentData={shipmentData} />
      <Sidebar
        shipmentData={filteredResults?.length > 0 ? filteredResults : shipmentData}
      />
    </div>
  );
}

export default Container;
