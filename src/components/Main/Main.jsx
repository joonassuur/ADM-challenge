import React from "react";
import { Switch, Route } from "react-router-dom";

import useStyles from "./Main.styles";

function Main({ isSidebarOpen }) {
  const classes = useStyles(isSidebarOpen);

  return (
    <Switch>
      <Route path="/">
        <div className={classes.main}>main</div>
      </Route>
      <Route path="/test1">
        <div className={classes.main}>main1</div>
      </Route>
      <Route path="/test2">
        <div className={classes.main}>main2</div>
      </Route>
    </Switch>
  );
}
export default Main;
