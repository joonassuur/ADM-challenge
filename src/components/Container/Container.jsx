import React, { useState, useEffect } from "react";
import { Main, Header, Sidebar, ShipmentsAPI } from "../Index";
import useStyles from "./Container.styles";

function Container() {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(true);
  useEffect(() => {
    (async () => {
      const { data } = await ShipmentsAPI.getShipments();

      if (data) console.log(data);
    })();
  }, []);

  return (
    <div className={classes.container}>
      <Header setOpen={() => setOpen(!isOpen)} isOpen={isOpen} />
      <Main isOpen={isOpen} />
      <Sidebar isOpen={isOpen} setOpen={() => setOpen(!isOpen)} />
    </div>
  );
}

export default Container;
