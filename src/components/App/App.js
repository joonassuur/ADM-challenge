import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setShipmentData,
  setShouldFetch,
  getShipmentData,
  getShouldFetch,
} from "../../redux/Index";

import { Main, Header, Sidebar, Shipments } from "../Index";
import useStyles from "./App.styles";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const shipmentData = useSelector(getShipmentData);
  const shouldFetch = useSelector(getShouldFetch);

  const [searchFilter, setSearchFilter] = useState(undefined);

  useEffect(() => {
    (async () => {
      if (shouldFetch) {

        // sort the company list alphabetically
        Shipments.sort((a, b) => {
          const textA = a.name.toUpperCase();
          const textB = b.name.toUpperCase();

          return textA.localeCompare(textB);
        });

        if (Shipments) {
          dispatch(setShouldFetch(false));
          // once the data is fetched, dispatch it to redux
          dispatch(setShipmentData(Shipments));
        }
      }
    })();
  }, [dispatch, shipmentData, shouldFetch]);

  return shipmentData ? (
    <div className={classes.app}>
      <Header searchFilter={searchFilter} setSearchFilter={(e) => setSearchFilter(e)} />
      <Sidebar
        shipmentData={
          // handle search filtering
          searchFilter
            ? shipmentData?.filter((text) => text?.name?.toLowerCase().includes(searchFilter))
            : shipmentData
        }
      />
      <Main shipmentData={shipmentData} />
    </div>
  ) : null;
}

export default App;
