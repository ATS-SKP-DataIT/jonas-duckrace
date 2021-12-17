import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        textAlign: "center", 
    },
    title:{
        marginTop: 10, 
        color: "#2B2E34", 
        fontSize: 25, 
        fontFamily: "Roboto"
    },
    text:{
        fontSize: 16
    },
    underText:{
        fontSize: 20
    },
    location:{
        width: "70%",
        maxWidth: "400px", 
        border: "2px solid black"
    }
}));