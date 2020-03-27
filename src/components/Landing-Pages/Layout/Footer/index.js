import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import { useStyles } from '../style';

const Footer = () =>{
    const classes = useStyles();
    return(
        <div className={classes.footerWrapper}>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={4} sm={4}>
                    <Paper className={classes.paper, classes.transparentPaper}>
                    <Link to="/" className={classes.appLogo} style={{color:'#333'}}>
                        Kelas<span style={{color:"#FF2858"}}>Digital.</span>
                    </Link>
                    <p className={classes.footerDesc}>
                        Belajar Design dan IT dengan materi paling update serta mentor profesional akan membantu anda menjadi ahli.
                    </p>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Paper className={classes.paper, classes.transparentPaper}>
                        <h3>Social</h3>
                        <ul className={classes.socialMediaList}>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                        <h3>Contact Us</h3>
                        <ul className={classes.socialMediaList}>
                            <li>kelasdigital@gmail.com</li>
                            <li>Bandung, Indonesia</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Paper className={classes.paper, classes.transparentPaper}>
                        <div className={classes.copyRight}>
                            <h3 style={{color:'#333'}}>&copy; 2020 - 2021</h3>
                            <p>All rights reserved <br/> Bandung, Indonesia</p>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Footer;