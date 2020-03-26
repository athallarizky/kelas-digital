import { makeStyles } from '@material-ui/core/styles';

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
    fontWeight: "Bold",
    textDecoration: 'none',
    color: '#FFF'
    
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
    // display:'flex',
    // justifyContent:'center !important',
  },

  

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  // Right pane:
  toolbar: theme.mixins.toolbar,

  wrapper:{
    paddingTop: '10px',
    minHeight:'100vh',
  },

  appBar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    minHeight: 80,
    padding: 5,
    backgroundColor: '#F5F6F8 !important',
  },

  appItemsContainer: {  
    padding: 25,
  },
  
  appItems:{
    padding:25,
    paddingTop: 10,
    paddingBottom: 10,
    textDecoration: 'none',
    marginRight:'20px',
    borderRadius:'5px',
  },

  registerButton: {
    background:'#AC0026',
    color:'#FFF'
  },

  loginButton:{
    border: '1.5px solid #AC0026',
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#22222D !important',
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight:'100vh',
    padding:0,
  },

  rightPane: {
    marginLeft: drawerWidth
  }

}));