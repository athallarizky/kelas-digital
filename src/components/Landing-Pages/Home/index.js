import React from 'react';
import {useStyles} from './style';

import SearchBar from '../../Shared/Search-Bar';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Home = () => {
    const classes = useStyles();   
    return(
        <div className={classes.wrapper}>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <h1 className={classes.mainText}>Menjadi Ahli Bersama Kami</h1>
                        <p className={classes.secondaryText}>
                            Belajar Design dan IT dengan materi paling update serta mentor professional akan membantu anda menjadi ahli.
                        </p>

                        <div className={classes.searchWrapper}>
                            <SearchBar/>
                            <Button variant="contained" color="primary" className={classes.searchButton}>
                                <SearchIcon/>
                            </Button>
                        </div>
                        <div>
                            Populer Course : Mobile Design UI/UX 
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;