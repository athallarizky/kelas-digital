import React from 'react';

import {useStyles} from './style';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const FAQ = () => {
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>
                        <div className={classes.textWrapper}>
                            <h1 className={classes.mainText}>Frequently Asked Question</h1>
                            <p className={classes.secondaryText}>Jika pertanyaan anda belum terjawab. 
                            <br/>Silahkan hubungi kami melalui<b> Contact Us.</b></p>
                            
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Card variant="outlined">
                        <CardContent className={classes.cardQuestion}>
                            <h3>Bagaimana Cara Belajarnya?</h3>
                        </CardContent>
                        <CardContent className={classes.cardAnswer}>
                            <p>Cari kelas yang sudah anda beli pada dashboard user dan tonton videonya.</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Card variant="outlined">
                        <CardContent className={classes.cardQuestion}>
                            <h3>Bisa Konsultasi dengan mentor?</h3>
                        </CardContent>
                        <CardContent className={classes.cardAnswer}>
                            <p>Bisa, anda akan di invite ke grup telegram bersama mentor course.</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Card variant="outlined">
                        <CardContent className={classes.cardQuestion}>
                            <h3>Apakah ini berlangganan?</h3>
                        </CardContent>
                        <CardContent className={classes.cardAnswer}>
                            <p>Tidak, Kelas yang sudah anda beli adalah milik anda selamanya.</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Card variant="outlined">
                        <CardContent className={classes.cardQuestion}>
                            <h3>Apakah materinya dari Basic?</h3>
                        </CardContent>
                        <CardContent className={classes.cardAnswer}>
                            <p>Ya, Semua course yang kami sediakan dimulai dari basic.</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Card variant="outlined">
                        <CardContent className={classes.cardQuestion}>
                            <h3>Materi kelas dalam bentuk apa?</h3>
                        </CardContent>
                        <CardContent className={classes.cardAnswer}>
                            <p>Materi yang kami sediakan ada dalam bentuk video dan artikel pada Blog.</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Card variant="outlined">
                        <CardContent className={classes.cardQuestion}>
                            <h3>Berapa mentor dalam course?</h3>
                        </CardContent>
                        <CardContent className={classes.cardAnswer}>
                            <p>Tiap course punya satu mentor sebagai pengajar.</p>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </div>
    )
}

export default FAQ;