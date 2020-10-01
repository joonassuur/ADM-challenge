import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles(({ isOpen }) => ({
  header: {
    marginLeft: (isOpen) => (isOpen ? "240px" : "0px"),
    width: (isOpen) => (isOpen ? "calc(100% - 240px)" : "100%"),
  },

}));
