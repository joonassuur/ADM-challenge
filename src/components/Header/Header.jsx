import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsSidebarOpen } from "../../redux/Selectors";

import { isOpen } from "../../redux/AppActions";

import { AppBar, Toolbar, IconButton, Typography, TextField } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./Header.styles";

function Header({ searchFilter, setSearchFilter }) {
  const isSidebarOpen = useSelector(getIsSidebarOpen);
  const classes = useStyles(isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <AppBar position="fixed" className={classes.header}>
      <Toolbar>
        <IconButton
          onClick={() => {
            dispatch(isOpen(!isSidebarOpen));
          }}
          color="inherit"
          aria-label="open drawer"
        >
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
