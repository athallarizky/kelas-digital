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
    textWrapper:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    mainText:{
        maxWidth:"450px",
        fontFamily:"Inter-Bold",
        fontSize: 50,
        marginBottom: 15,
        lineHeight:1.05,
        textTransform:'uppercase'
    },
    secondaryText:{
        maxWidth: "600px",
        marginBottom: 25,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor:'transparent',
        boxShadow:'none',
        textAlign:'left',
    },

    cardQuestion: {
        textAlign: 'left',
    },

    cardAnswer:{
        textAlign:'center'
    }

}));