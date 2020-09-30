import React, { useState } from "react";
import { Main, Header, Sidebar } from "../Index";
import useStyles from "./Container.styles";

function Container() {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(true);

  return (
    <div className={classes.container}>
      <Header setOpen={() => setOpen(!isOpen)} isOpen={isOpen} />
      <Main isOpen={isOpen} />
      <Sidebar isOpen={isOpen} setOpen={() => setOpen(!isOpen)} />
    </div>
  );
}

export default Container;
