import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content:{
        margin: "5%"
    },
    title:{
        textAlign: "center",
        marginTop: 10,
        color: "#2B2E34",
        fontSize: 25,
        fontFamily: "Roboto"
    },
    underContent:{
        marginTop: "20%"
    },
    textLogo:{
        width: "50%",
        float: "left"
    },
    inputAntal:{
        width: "40%",
        height: "8vh",
        borderRadius: 10,
        textAlign: "center",
        float: "right"
    },
    inputTelefon:{
        borderRadius: 10,
        textAlign: "center",
        height: "6vh",
        width: "100%",
        marginTop: 60
    },
    buttonMobilePay:{
        borderRadius: 10,
        textAlign: "center",
        height: "6vh",
        width: "100%",
        marginTop: 30
    },
}));