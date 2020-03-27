import React from 'react';
import {useStyles} from './style';

import LocalAtm from '@material-ui/icons/LocalAtm';
import Hd from '@material-ui/icons/Hd';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Testimonials = () => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12} sm={6}>
                    <Paper className={`${classes.paper} ${classes.shadowNone}`}>
                    <h1 className={classes.mainText}>Testimonial's</h1>
                        <p className={classes.secondaryText}>
                            Kata mereka tentang pengalaman menggunakan website kami.
                        </p>

                        <img src="/assets/img/svg/testimonial.svg" className={classes.testimonialIllustration}/>
                    </Paper> 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src="/assets/img/png/quot.png" className={ classes.quoteImg }/>
                    <Paper className={classes.paper}>
                        <div className={classes.testimonialWrapper}>
                            <p className={classes.testimonialQuote}>
                            “Belajar disini asik, materi yang disampaikan detail dan jelas. Alhamdulillah sekarang saya sudah dapat job di salah satu statup di Indonesia.”
                            </p>

                            <div className={classes.courseInformation}>
                                <div className={classes.profileWrapper}>
                                    <img src="/assets/img/png/mentor.png" className={classes.profileImage}/>
                                    <div className={classes.profileInfo}>
                                        <h4 className={classes.profileName}>Mike Burton</h4>
                                        <p className={classes.profileDesc}>UI Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </Paper>
                        <div className={classes.testimonialNavigation}>
                            <Button variant="contained" color="primary" className={classes.navButton}>
                                <NavigateBefore color="ternary"/>
                            </Button>
                            <Button variant="contained" color="primary" className={classes.navButton}>
                                <NavigateNext color="ternary"/>
                            </Button>
                        </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Testimonials;