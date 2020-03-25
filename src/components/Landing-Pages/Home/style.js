import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    wrapper:{
        backgroundImage: `url("/assets/img/png/bg.png")`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    test:{
        color:'darkred',
    }
}));