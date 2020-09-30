import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./Header.styles";

function Header({setOpen, isOpen}) {
  const classes = useStyles(isOpen);
  
  return (
    <AppBar 
      position="fixed"
      className={classes.header}
    >
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer">
          <MenuIcon onClick={() => setOpen()} />
        </IconButton>
        <Typography variant="h6" noWrap>
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
