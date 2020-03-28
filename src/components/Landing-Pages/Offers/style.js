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
        marginBottom: 70,
        lineHeight:1.05,
    },
    secondaryText:{
        maxWidth: "450px",
        marginBottom: 50,
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor:'transparent',
        textAlign:'left'
    },

    shadowNone: {
        boxShadow:'none',
    },

    offersIllustration:{
        width:'90%',
    },

    offersWrapper:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 50,
    },

    offersButton:{
        display:'flex',
        justifyContent: 'flex-start',
        width: '250px',
        minHeight: '50px',
        textTransform: 'capitalize',
        marginBottom: 80,
        backgroundColor: '#FFF',
    },

    offersIcon:{
        fontSize: 50,
    },

    iconText:{
        marginLeft: 5,
    }

}));