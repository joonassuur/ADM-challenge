import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, TextField } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./Header.styles";

function Header({ setSidebarOpen, isSidebarOpen, searchFilter, setSearchFilter}) {
  const classes = useStyles(isSidebarOpen);

  return (
    <AppBar position="fixed" className={classes.header}>
      <Toolbar>
        <IconButton onClick={() => setSidebarOpen()} color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Cargo planner
        </Typography>
        <TextField
          value={searchFilter || ""}
          onChange={(e) => setSearchFilter(e.target.value)}
          className={classes.searchBar}
          label="Outlined"
          variant="outlined"
        />
      </Toolbar>
    </AppBar>
  );
}
export default Header;
