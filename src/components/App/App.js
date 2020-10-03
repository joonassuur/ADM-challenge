import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setShipmentData,
  setShouldFetch,
  getShipmentData,
  getShouldFetch,
} from "../../redux/Index";

import { Main, Header, Sidebar, ShipmentsAPI } from "../Index";
import useStyles from "./App.styles";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const shipmentData = useSelector(getShipmentData);
  const shouldFetch = useSelector(getShouldFetch);

  // handle search filtering
  const [searchFilter, setSearchFilter] = useState(undefined);

  useEffect(() => {
    (async () => {
      if (shouldFetch) {
        // fetch the data from shipments.json
        const { data } = await ShipmentsAPI.getShipments();

        // sort the list alphabetically
        data.sort((a, b) => {
          const textA = a.name.toUpperCase();
          const textB = b.name.toUpperCase();

          return textA.localeCompare(textB);
        });

        if (data) {
          dispatch(setShouldFetch(false));
          // once the data is fetched, dispatch it to redux
          dispatch(setShipmentData(data));
        }
      }
    })();
  }, [dispatch, shipmentData, shouldFetch]);

  return shipmentData ? (
    <Switch>
      <Route>
        <div className={classes.app}>
          <Header searchFilter={searchFilter} setSearchFilter={(e) => setSearchFilter(e)} />
          <Sidebar
            shipmentData={
              searchFilter
                ? shipmentData?.filter((text) => text?.name?.toLowerCase().includes(searchFilter))
                : shipmentData
            }
          />
          <Main shipmentData={shipmentData} />
        </div>
      </Route>
    </Switch>
  ) : null;
}

export default App;
