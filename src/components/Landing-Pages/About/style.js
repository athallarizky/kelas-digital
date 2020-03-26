import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // width: 'calc(100% - 10px) !important',
        width: '100% !important',
        paddingLeft: 100,
    },
    wrapper:{
        height: '100vh',
        paddingTop: 80,
        backgroundColor:'#F5F6F8'
    },
    mainText:{
        maxWidth:"450px",
        fontFamily:"Inter-Bold",
        fontSize: 50,
        marginBottom: 15,
        lineHeight:1.05,
        paddingLeft: 100,
    },
    secondaryText:{
        maxWidth: "450px",
        marginBottom: 25,
        textAlign: 'left'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor:'transparent',
        boxShadow:'none'
    },

    aboutIllustration: {
        width:'90%'
    },

    aboutHiasan: {
        width:'100%'
    }

}));