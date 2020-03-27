import React from 'react';
import {useStyles} from './style';

import CoursePanel from '../../Shared/Course-Panel';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';

const TopCourses = () => {
    const classes = useStyles();

    return(
        <div className={classes.wrapper}>
            
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                    <h1 className={classes.mainText}>Beberapa Top Course Kami</h1>
                        <p className={classes.secondaryText}>
                        Berikut adalah 3 Kelas yang paling banyak dikunjungi di website kami. Anda bisa melihat lebih banyak Kelas yang kami miliki di Katalog Course.
                        </p>

                        <img src="/assets/img/svg/top-course.svg" className={classes.topCourseIllustration}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={`${classes.paper} ${classes.topCourseWrapper}`}>
                        
                        <CoursePanel/>
                        
                        <div className={classes.topCourseNavigation}>
                            <Button variant="contained" color="primary" className={classes.navButton}>
                                <NavigateBefore color="ternary"/>
                            </Button>
                            <Button variant="contained" color="primary" className={classes.navButton}>
                                <NavigateNext color="ternary"/>
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default TopCourses;