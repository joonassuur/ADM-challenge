import React from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import useStyles from "./Main.styles";

function Main({ isSidebarOpen, shipmentData }) {
  const classes = useStyles(isSidebarOpen);
  const location = useLocation()

  return (
    <Switch>
      <Route path={location.pathname}>
        <div className={classes.main}>
          {location.pathname.substring(1)}
        </div>
      </Route>
    </Switch>
  );
}
export default Main;
