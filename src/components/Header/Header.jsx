import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import { setIsOpen, setShouldFetch, saveShipmentData, getIsSidebarOpen } from "../../redux/Index";
import { AppBar, Toolbar, IconButton, Typography, Button, InputBase } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./Header.styles";

function Header({ searchFilter, setSearchFilter }) {
  const isSidebarOpen = useSelector(getIsSidebarOpen);

  const theme = useTheme();

  const classes = useStyles(theme, isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <AppBar position="fixed" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <div className="leftContainer">
          <IconButton
            onClick={() => {
              // handle whether sidebar is open or closed
              dispatch(setIsOpen(!isSidebarOpen));
            }}
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className="headerTitle" variant="h6" noWrap>
            Cargo planner
          </Typography>
          {/* search bar */}
        </div>
        <div className="rightContainer">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={searchFilter || ""}
              onChange={(e) => setSearchFilter(e.target.value)}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {/* saves the changed values to redux (otherwise they reset when route is changed) */}
          <Button
            onClick={() => dispatch(saveShipmentData())}
            color="secondary"
            variant="contained"
          >
            Save
          </Button>
          {/* reload the initial data from shipments.json */}
          <Button
            onClick={() => dispatch(setShouldFetch(true))}
            color="secondary"
            variant="contained"
          >
            Load
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
