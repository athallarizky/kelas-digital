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
          Kelas<span style={{color:"#FF2858"}}>Digital.</span>
        </Link>
      </div>

      <List className={classes.appListItems}>
        <Link to="/" className={classes.navLinks}>
          <ListItem button className={classes.navItem}>
              Home
          </ListItem>
        </Link>
        <Link to="/about" className={classes.navLinks}>
          <ListItem button className={classes.navItem}>
              About
          </ListItem>
        </Link>
        <Link to="/offers" className={classes.navLinks}>
          <ListItem button className={classes.navItem}>
              Offers
          </ListItem>
        </Link>
        <Link to="/top-course" className={classes.navLinks}>
          <ListItem button className={classes.navItem}>
              Top Courses
          </ListItem>
        </Link>
        <Link to="/faq" className={classes.navLinks}>
          <ListItem button className={classes.navItem}>
              <li>F.A.Q</li>
          </ListItem>
        </Link>
        <Link to="/testimonials" className={classes.navLinks}>
          <ListItem button className={classes.navItem}>
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
      <nav className={classes.drawer} aria-label="mailbox folders" >
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