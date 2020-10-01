import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { getIsSidebarOpen, getShipmentData, getSelectedCompany } from "../../redux/Selectors";
import { setSelectedCompany } from "../../redux/AppActions";

import useStyles from "./Main.styles";

function Main() {
  const location = useLocation();
  const dispatch = useDispatch();

  const activeRoute = location.pathname.substring(1);

  const shipmentData = useSelector(getShipmentData);
  const isSidebarOpen = useSelector(getIsSidebarOpen);
  const selectedCompany = useSelector(getSelectedCompany);

  const classes = useStyles(isSidebarOpen);

  useEffect(() => {
    if (shipmentData) {
      shipmentData.map(
        (company) => company.name === activeRoute && dispatch(setSelectedCompany(company)),
      );
    }
  }, [shipmentData, activeRoute, dispatch]);

  return (
    <Switch>
      <Route path={location.pathname}>
        <div className={classes.main}>
          <p>{selectedCompany?.name}</p>
          <a href={`mailto:${selectedCompany?.email}`}>{selectedCompany?.email}</a>
          <p>Number of required cargo bays</p>
          <p>Cargo boxes</p>
          <TextField className={classes.input} value={selectedCompany?.boxes || ""} />
        </div>
      </Route>
    </Switch>
  );
}
export default Main;
