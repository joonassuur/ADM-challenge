import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsSidebarOpen } from "../../redux/Selectors";
import { setIsOpen, setShouldFetch } from "../../redux/AppActions";

import { Drawer, Divider, List, ListItem, IconButton, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useStyles from "./Sidebar.styles";

function Sidebar({ shipmentData }) {
  const isSidebarOpen = useSelector(getIsSidebarOpen);
  const classes = useStyles(isSidebarOpen);
  const dispatch = useDispatch();

  return shipmentData ? (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isSidebarOpen}
      className={classes.sidebar}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div>
        <IconButton
          onClick={() => {
            dispatch(setIsOpen(!isSidebarOpen));
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {shipmentData.map(({ id, name }) => (
          <Link
            key={id}
            to={`/${name}`}
            onClick={() => {
              dispatch(setShouldFetch(true));
            }}
          >
            <ListItem button>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  ) : null;
}
export default Sidebar;
