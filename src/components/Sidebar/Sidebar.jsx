import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsSidebarOpen } from "../../redux/Selectors";
import { setIsOpen } from "../../redux/AppActions";

import { Drawer, Divider, List, ListItem, ListItemText, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./Sidebar.styles";

function Sidebar({ shipmentData }) {
  const isSidebarOpen = useSelector(getIsSidebarOpen);
  const classes = useStyles(isSidebarOpen);
  const dispatch = useDispatch();

  const drawer = () => (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {/* displays the list of companies on the sidebar */}
        {shipmentData.map(({ id, name }) => (
          <ListItem component={Link} button key={id} to={`/${name}`}>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return shipmentData ? (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        {/* sidebar for mobile */}
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={isSidebarOpen}
          onClose={() => dispatch(setIsOpen(!isSidebarOpen))}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer()}
        </Drawer>
      </Hidden>
      {/* sidebar for desktop */}
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer()}
        </Drawer>
      </Hidden>
    </nav>
  ) : null;
}
export default Sidebar;
