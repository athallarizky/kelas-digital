import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    wrapper:{
        backgroundImage: `url("/assets/img/png/bg.png")`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingLeft: 100,
        paddingTop: 100,
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