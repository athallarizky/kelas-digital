import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    wrapper:{
        height: '100vh',
        paddingTop: 80,
        backgroundColor:'#F5F6F8'
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor:'transparent',
        boxShadow:'none',
        textAlign:'left'
    },
})); 
