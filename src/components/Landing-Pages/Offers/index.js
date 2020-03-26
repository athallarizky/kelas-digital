import React from 'react';

import LocalAtm from '@material-ui/icons/LocalAtm';
import Hd from '@material-ui/icons/Hd';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import { useStyles } from './style';

const Offers = () => {
    const classes = useStyles();

    return(
        <div className={classes.wrapper}>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12} sm={6}>
                    <Paper className={`${classes.paper} ${classes.shadowNone}`}>
                    <h1 className={classes.mainText}>Apa yang kami tawarkan?</h1>
                        <p className={classes.secondaryText}>
                        Kenyamanan anda dalam belajar adalah prioritas kami. 3 Hal berikut membantu anda untuk mencapai kenyamanan tersebut.
                        </p>

                        <img src="/assets/img/svg/offers.svg" className={classes.offersIllustration}/>
                    </Paper> 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <div className={classes.offersWrapper}>
                            <Button variant="contained" color="ternary" className={classes.offersButton}>
                                <LocalAtm color="primary" className={classes.offersIcon}/>
                                <h4 className={classes.iconText}>Harga Course Murah</h4>
                            </Button>
                            <Button variant="contained" color="ternary" className={classes.offersButton}>
                                <Hd color="primary" className={classes.offersIcon}/>
                                <h4 className={classes.iconText}>HD Quality Video</h4>
                            </Button>
                            <Button variant="contained" color="ternary" className={classes.offersButton}>
                                <PlaylistAddCheck color="primary" className={classes.offersIcon}/>
                                <h4 className={classes.iconText}>Step by Step Learning</h4>
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Offers;