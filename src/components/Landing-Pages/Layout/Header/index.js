import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import { useStyles } from '../style';

const Header = () =>{
    const classes = useStyles();
    return(
        <AppBar position="fixed" className={classes.appBar} >
            <div className={classes.appItemsContainer}>
                <Link to="" className={`${classes.appItems} ${classes.registerButton}`}>
                    Daftar
                </Link>
                <Link to="/login" className={`${classes.appItems} ${classes.loginButton}`}>
                    Masuk
                </Link>
            </div>
            
        </AppBar>
    )
}

export default Header;