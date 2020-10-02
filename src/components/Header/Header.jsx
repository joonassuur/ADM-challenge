import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsSidebarOpen } from "../../redux/Selectors";

import { setIsOpen, setShouldFetch, saveShipmentData } from "../../redux/AppActions";

import { AppBar, Toolbar, IconButton, Typography, TextField, Button } from "@material-ui/core";
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
            dispatch(setIsOpen(!isSidebarOpen));
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
        <Button onClick={()=>dispatch(saveShipmentData("save"))} variant="contained">Save</Button>
        <Button onClick={()=>dispatch(setShouldFetch(true))} variant="contained">Load</Button>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
