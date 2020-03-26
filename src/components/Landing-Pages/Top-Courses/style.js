import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
    },
    secondaryText:{
        maxWidth: "450px",
        marginBottom: 25,
    },
    paper: {
        display:'flex',
        flexDirection:'column',
        padding: theme.spacing(2),
        backgroundColor:'transparent',
        boxShadow:'none',
    },

    topCourseNavigation:{
        width: '70%',
        display: 'flex',
        justifyContent:'space-between',
    },

    navButton:{
        width: '80px',
    },

    topCourseIllustration: {
        width:'80%',
    },

    topCoursePanel: {
        width:'70%',
        marginBottom: 30,
    }
}));