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
        textTransform:'uppercase'
    },
    secondaryText:{
        maxWidth: "300px",
        marginBottom: 50,
    },
    paper: {
        display:'flex',
        flexDirection:'column',
        padding: theme.spacing(2),
        backgroundColor:'transparent',
        textAlign:'left'
    },

    testimonialIllustration:{
        width:'90%',
    },

    testimonialWrapper:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 50,
    },

    iconText:{
        marginLeft: 5,
    },

    quoteImg:{
        position: 'absolute',
        width:100,
        marginTop: '-50'
    },

    testimonialQuote: {
        fontFamily:'Inter-Italic',
        maxWidth:350,
        marginBottom: 20,
        fontSize: 15,
        marginTop: 100,
    },

    testimonialNavigation:{
        marginTop:20,
        width: '100%',
        display: 'flex',
        justifyContent:'space-around',
    },

    shadowNone: {
        boxShadow:'none',
    },

    navButton:{
        width: '80px',
    },

    courseInformation:{
        width: '60%',
    },

    profileWrapper:{
        display: 'flex',
        alignItems: 'center',
        marginBottom:50,
    },

    profileImage:{
        width: 80
    },

    profileInfo:{
        padding:10,
    },

    profileName:{
        fontFamily: 'Inter-SemiBold',
    },

    profileDesc: {
        fontSize: 10,
        color: '#333'
    },

}));