import React, { useState } from "react";
import { Drawer, Divider, List, ListItem, IconButton, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useStyles from "./Sidebar.styles";

function Sidebar({ isSidebarOpen, setSidebarOpen, shipmentData }) {
  const classes = useStyles();

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
        <IconButton onClick={() => setSidebarOpen()}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {shipmentData.map(({id, name}) => (
          <Link key={id} to={`/${name}`}>
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
