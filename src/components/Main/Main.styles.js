import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    flexGrow: "1",
    textAlign: "left",
    marginTop: "15px",
    marginLeft: "30px",
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0,
    },
  },
  details: {
    marginTop: "20px"
  },
  spinner: {
    textAlign: "center",
  },
  input: {
    minWidth: "300px",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));
