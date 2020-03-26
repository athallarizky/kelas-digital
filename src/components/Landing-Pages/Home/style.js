import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
        // width: 'calc(100% - 10px) !important',
        width: '100% !important',
        paddingLeft: 100,
    },
    wrapper:{
        backgroundImage: `url("/assets/img/png/bg.png")`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // paddingLeft: 100,
        paddingTop: 80,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor:'transparent',
        boxShadow:'none',
        textAlign:'left'
    },
    mainText:{
        maxWidth:"450px",
        fontFamily:"Inter-Bold",
        fontSize: 50,
        marginBottom: 50,
        lineHeight:1.05,
        
    },
    secondaryText:{
        maxWidth: "450px",
        marginBottom: 50,
    },
    searchWrapper: {
        display:"inline-flex",
        alignItems: 'center',
    },
    searchButton: {
        height: 55
    }
}));