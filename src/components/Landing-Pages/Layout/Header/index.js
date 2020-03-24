import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import { useStyles } from '../style';

const Header = () =>{
    const classes = useStyles();
    return(
        <AppBar position="fixed" className={classes.appBar} >
            <div className={classes.appItemsContainer}>
                <Link to="/login" className={classes.appItems}>
                    Login
                </Link>
                <Link to="/login" className={classes.appItems}>
                    Daftar
                </Link>
            </div>
            
        </AppBar>
    )
}

export default Header;