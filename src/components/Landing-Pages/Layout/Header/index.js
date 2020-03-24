import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useStyles } from '../style';

const Header = () =>{
    const classes = useStyles();
    return(
        <AppBar position="fixed" className={classes.appBar}>
            <p>Application Bar</p>
        </AppBar>
    )
}

export default Header;