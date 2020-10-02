import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
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

  const location = useLocation();

  const [searchFilter, setSearchFilter] = useState(undefined);
  const filteredResults = shipmentData?.filter((text) =>
    text?.name?.toLowerCase().includes(searchFilter),
  );

  useEffect(() => {
    (async () => {
      if (shouldFetch) {
        const { data } = await ShipmentsAPI.getShipments();
        if (data && !shipmentData) dispatch(setShipmentData(data));

        dispatch(setShouldFetch(false));
      }
    })();
  }, [dispatch, shipmentData, shouldFetch]);

  useEffect(() => {
    //make sure the data gets fetched when browser back/forward buttons are pressed
    dispatch(setShouldFetch(true));
  }, [dispatch, location]);

  return (
    <Switch>
      <Route>
        <div className={classes.container}>
          <Header searchFilter={searchFilter} setSearchFilter={(e) => setSearchFilter(e)} />
          <Main shipmentData={shipmentData} />
          <Sidebar shipmentData={filteredResults?.length > 0 ? filteredResults : shipmentData} />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
