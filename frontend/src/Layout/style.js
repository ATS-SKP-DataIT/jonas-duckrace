import { makeStyles, alpha } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: "none"
    },
    toolBar: {
        backgroundColor: "#EFA80A"
    },
    image: {
        marginRight: "10px"
    },
    link: {
        textDecoration: "none",
        color: "white",
    },
    menuItem: {
        textDecoration: "none"
    },
    hiddenMenu: {
        display: "none"
    }
}));