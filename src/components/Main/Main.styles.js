import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    flexGrow: "1",
    textAlign: "left",
    marginLeft: "30px",
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0,
    },
  },
  spinner: {
    textAlign: "center",
  },
  input: {
    width: "250px",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));
