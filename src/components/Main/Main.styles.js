import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles(({isOpen}) => ({
    main: {
        display: "inline-block",
        textAlign: "left",
        marginTop:"100px",
        marginLeft: (isOpen)=>isOpen ? "280px" : "40px"
    },
    input: {
        width: "300px"
    }
}));