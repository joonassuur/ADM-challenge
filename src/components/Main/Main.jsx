import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Route, Switch } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { TextField, CircularProgress, Typography, Link } from "@material-ui/core";

import {
  setSelectedCompany,
  modifyBoxes,
  getIsSidebarOpen,
  getShipmentData,
  getSelectedCompany,
  getShouldFetch,
} from "../../redux/Index";

import useStyles from "./Main.styles";

function Main() {
  const location = useLocation();
  const dispatch = useDispatch();
  const activeRoute = location.pathname.substring(1);

  const [requiredBays, setRequiredBays] = useState(undefined);

  const shouldFetch = useSelector(getShouldFetch);
  const shipmentData = useSelector(getShipmentData);
  const isSidebarOpen = useSelector(getIsSidebarOpen);
  const selectedCompany = useSelector(getSelectedCompany);

  const theme = useTheme();
  const classes = useStyles(theme, isSidebarOpen);


  useEffect(() => {
    if (shipmentData) {
      // set currently active company on redux depending on the selected route
      shipmentData.forEach(
        (company) => company.name === activeRoute && dispatch(setSelectedCompany(company)),
      );
    }
  }, [activeRoute, dispatch, shipmentData, shouldFetch]);

  useEffect(() => {
    // calculate required cargo bays
    if (selectedCompany) {
      const add = (a, b) => a + b;
      const boxes = selectedCompany?.boxes?.split(",").map((e) => +e);
      let sum = boxes?.reduce(add);

      if (sum < 0) sum = 0;

      setRequiredBays((Math.ceil(sum / 10) * 10) / 10);
    }
  }, [selectedCompany]);

  return (
    <Switch>
      <Route exact path={`/${selectedCompany?.name}`}>
        <main className={classes.main}>
          <div className={classes.toolbar} />
          {!shouldFetch ? (
            <>
              <Typography variant="h4">{selectedCompany?.name}</Typography>
              <Link variant="body1" href={`mailto:${selectedCompany?.email}`}>
                {selectedCompany?.email}
              </Link>
              <div className={classes.details}>
                <Typography gutterBottom variant="body1">
                  Number of required cargo bays: <strong> {requiredBays || "0"} </strong>
                </Typography>
                <Typography gutterBottom variant="body1">
                  Cargo boxes
                </Typography>
                <TextField
                  // dispatch the modified active company to redux
                  onChange={(e) => dispatch(modifyBoxes(e.target.value))}
                  className={classes.input}
                  value={selectedCompany?.boxes || ""}
                />
              </div>
            </>
          ) : (
            // if fetching data, display spinner
            <div className={classes.spinner}>
              <CircularProgress />
            </div>
          )}
        </main>
      </Route>
    </Switch>
  );
}
export default Main;
