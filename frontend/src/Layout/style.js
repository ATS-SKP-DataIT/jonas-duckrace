import { makeStyles, alpha } from '@material-ui/core/styles';


const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: "none",
        width: "100%"
    },
    toolBar: {
        backgroundColor: "#EFA80A",
    },
    image: {
        marginRight: "-5px",
    },
    linkNav: {
        textDecoration: "none",
        color: "white",
        [theme.breakpoints.down('md')]: {
            display: "none",
            fontSize: "0px"
        }
    },
    menuItem: {
        textDecoration: "none",
        [theme.breakpoints.down('md')]: {
            fontSize: "0px"
        }
    },
    hideBurger: {
        [theme.breakpoints.up('md')]: {
            display: "none",
            position: "relative"
        }
    },
    burgerLink: {
        backgroundColor: "red"
    }
}));