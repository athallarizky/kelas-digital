import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { useStyles } from '../style';

function Navigation(props) {
  const classes = useStyles();

  const drawer = (
    <div className={classes.drawerContainer}>

      <div className={classes.toolbar, classes.appLogoContainer} >
        <Link to="/" className={classes.appLogo}>
          KelasDigital.
        </Link>
      </div>

      <List className={classes.appListItems}>
        <Link to="/">
          <ListItem button>
              <li>Home</li>
          </ListItem>
        </Link>
        <Link to="/about">
          <ListItem button>
              <li>About</li>
          </ListItem>
        </Link>
        <Link to="/offers">
          <ListItem button>
              <li>Offers</li>
          </ListItem>
        </Link>
        <Link to="/top-course">
          <ListItem button>
              <li>Top Courses</li>
          </ListItem>
        </Link>
        <Link to="/faq">
          <ListItem button>
              <li>F.A.Q</li>
          </ListItem>
        </Link>
        <Link to="/testimonials">
          <ListItem button>
              <li>Testimonials</li>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xsDown implementation="css">
          <Drawer classes={{ paper: classes.drawerPaper,}} variant="permanent" open >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default Navigation;