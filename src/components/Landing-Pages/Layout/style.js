import { makeStyles, withStyles } from '@material-ui/core/styles';

export const drawerWidth = 250;
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
    display: 'flex',
    flexDirection: 'column',
    marginTop: '100px !important',
  },

  navLinks: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: '20px !important',
    letterSpacing: 2.5,
  },

  navItem: {
    display:'flex',
    justifyContent:'center !important',
    
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
    padding:25,
    marginRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    background: '#FFF',
    textDecoration: 'none'
  },

  loginButton: {
    maxWidth: 30,
    marginTop: '15px !important',
    marginRight: '30px !important',
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#22222D !important',
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  rightPane: {
    marginLeft: drawerWidth
  }

}));