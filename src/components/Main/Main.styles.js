import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles(({isOpen}) => ({
    main: {
        marginTop:"200px",
        marginLeft: (isOpen)=>isOpen ? "240px" : "0px"
    }
}));