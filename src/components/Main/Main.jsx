import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { TextField } from "@material-ui/core";
import {
  getIsSidebarOpen,
  getShipmentData,
  getSelectedCompany,
  getShouldFetch,
} from "../../redux/Selectors";
import { setSelectedCompany, modifyBoxes } from "../../redux/AppActions";

import useStyles from "./Main.styles";

function Main() {
  const location = useLocation();
  const dispatch = useDispatch();

  const activeRoute = location.pathname.substring(1);

  const shouldFetch = useSelector(getShouldFetch);
  const shipmentData = useSelector(getShipmentData);
  const isSidebarOpen = useSelector(getIsSidebarOpen);
  const selectedCompany = useSelector(getSelectedCompany);

  const [requiredBays, setRequiredBays] = useState(undefined);

  const classes = useStyles(isSidebarOpen);

  useEffect(() => {
    if (shipmentData && shouldFetch) {
      shipmentData.map(
        (company) => company.name === activeRoute && dispatch(setSelectedCompany(company)),
      );
    }
  }, [activeRoute, dispatch, shipmentData, shouldFetch]);

  useEffect(() => {
    if (selectedCompany) {
      const add = (a, b) => a + b;
      const boxes = selectedCompany?.boxes?.split(",").map((e) => +e);
      const sum = boxes?.reduce(add);

      setRequiredBays((Math.ceil(sum / 10) * 10) / 10);
    }
  }, [selectedCompany]);

  return (
    <div className={classes.main}>
      <p>{selectedCompany?.name}</p>
      <a href={`mailto:${selectedCompany?.email}`}>{selectedCompany?.email}</a>
      <p>{`Number of required cargo bays: ${requiredBays}`}</p>
      <p>Cargo boxes</p>
      <TextField
        onChange={(e) => dispatch(modifyBoxes(e.target.value))}
        className={classes.input}
        value={selectedCompany?.boxes || ""}
      />
    </div>
  );
}
export default Main;
