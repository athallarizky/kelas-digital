import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';

const Register = () => {
    const classes = useStyles();

    return(
        <div className={classes.wrapper}>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <h1>Register Pages</h1>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Register;