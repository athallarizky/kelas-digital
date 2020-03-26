import React from 'react';

import {useStyles} from './style';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const About = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.wrapper}>
            
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                    <h1 className={classes.mainText}>About Us</h1>
                        <p className={classes.secondaryText}>
                            Merupakan Website penyedia course online dalam bentuk video dengan materi paling update dan mentor profesional yang akan membantu anda menjadi ahli.
                        </p>
                        <p className={classes.secondaryText}>Segera Mulai Langkah Pertama anda untuk menguasai skill yang dibutuhkan industri saat ini !</p>

                        <img src="/assets/img/svg/about.svg" className={classes.aboutIllustration}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <img src="/assets/img/png/about-hiasan.png" className={classes.aboutHiasan}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;