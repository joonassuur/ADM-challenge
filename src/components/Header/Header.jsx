import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  InputBase,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Search, Menu } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";

import { setIsOpen, setShouldFetch, saveShipmentData, getIsSidebarOpen } from "../../redux/Index";
import useStyles from "./Header.styles";

function Header({ searchFilter, setSearchFilter }) {
  const isSidebarOpen = useSelector(getIsSidebarOpen);
  const [alertOpen, setAlertOpen] = React.useState(false);

  const theme = useTheme();
  const classes = useStyles(theme, isSidebarOpen);
  const dispatch = useDispatch();

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <AppBar position="fixed" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <div className="leftContainer">
          {/* menu icon for mobile view */}
          <IconButton
            onClick={() => {
              // handle whether sidebar is open or closed
              dispatch(setIsOpen(!isSidebarOpen));
            }}
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Menu />
          </IconButton>
          <Typography className="headerTitle" variant="h6" noWrap>
            Cargo planner
          </Typography>
        </div>
        <div className="rightContainer">
          {/* search bar */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
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
            onClick={() => {
              setAlertOpen(true);
              dispatch(saveShipmentData());
            }}
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
      {/* success message */}
      <Snackbar open={alertOpen} autoHideDuration={3000} onClose={handleAlertClose}>
        <Alert elevation={6} variant="filled" onClose={handleAlertClose} severity="success">
          Saved!
        </Alert>
      </Snackbar>
    </AppBar>
  );
}
export default Header;
