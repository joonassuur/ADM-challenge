import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    flexGrow: "1",
    textAlign: "left",
    marginTop: "100px",
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
}));
