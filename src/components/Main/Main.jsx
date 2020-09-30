import React from "react";
import useStyles from "./Main.styles";

function Main({isOpen}) {
  const classes = useStyles(isOpen);

  return <div className={classes.main}>main</div>;
}
export default Main;
