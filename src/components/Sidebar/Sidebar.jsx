import React, { useState } from "react";
import { Drawer, Divider, List, ListItem, IconButton, ListItemText } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useStyles from "./Sidebar.styles";

function Sidebar({ isOpen, setOpen }) {
  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      className={classes.sidebar}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div>
        <IconButton onClick={() => setOpen()}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
export default Sidebar;
