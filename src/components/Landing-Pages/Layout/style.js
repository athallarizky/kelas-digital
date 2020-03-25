import { makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
export const drawerWidth = 240;
export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  appLogoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  appLogo: {
    marginTop: 20,
    fontSize: 30,
    textDecoration: 'none'
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  appListItems: {
    marginTop: '40px !important',
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  // Right pane:
  toolbar: theme.mixins.toolbar,

  appBar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    minHeight: 80,
    padding: 5
  },

  appItemsContainer: {
    paddingTop: 25,
    
  },

  appItems:{
    color:'#FFF',
    padding:25,
    marginRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    background: '#FFF',
    color: purple,
    textDecoration: 'none'
  },

  loginButton: {
    maxWidth: 30,
    marginTop: '15px !important',
    marginRight: '30px !important',
  },

  drawerPaper: {
    width: drawerWidth,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  rightPane: {
    marginLeft: drawerWidth
  }

}));