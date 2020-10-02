import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShipmentData, getShouldFetch } from "../../redux/Selectors";
import { setShipmentData, setShouldFetch } from "../../redux/AppActions";

import { Main, Header, Sidebar, ShipmentsAPI } from "../Index";
import useStyles from "./App.styles";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const shipmentData = useSelector(getShipmentData);
  const shouldFetch = useSelector(getShouldFetch);

  const [searchFilter, setSearchFilter] = useState(undefined);
  const filteredResults = shipmentData?.filter((text) =>
    text?.name?.toLowerCase().includes(searchFilter),
  );

  useEffect(() => {
    (async () => {
      if (shouldFetch) {
        const { data } = await ShipmentsAPI.getShipments();
        if (data) {
          dispatch(setShouldFetch(false));
          dispatch(setShipmentData(data));
        }
      }
    })();
  }, [dispatch, shipmentData, shouldFetch]);

  return (
    <Switch>
      <Route>
        <div className={classes.app}>
          <Header searchFilter={searchFilter} setSearchFilter={(e) => setSearchFilter(e)} />
          <Main shipmentData={shipmentData} />
          <Sidebar shipmentData={filteredResults?.length > 0 ? filteredResults : shipmentData} />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
