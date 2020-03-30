import React from 'react';

import { useStyles } from './style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    const classes = useStyles();

    return(
        <div className={classes.wrapper}>
            <div className={classes.boxContainer}>
                <div className={classes.loginWrapper}>
                    <div className={classes.appLogo}>
                        <h1>Kelas<span style={{color:"#FF2858"}}>Digital.</span></h1>
                    </div>
                    <h1 className={classes.mainText}>Login ke Akun</h1>
                    <p className={classes.secondaryText}>Segera belajar dan dapatkan project pertama anda.</p>
                    <div className={classes.formGroup}>
                        <form noValidate autoComplete="off">
                            <label className={classes.labelInput}>Email</label>
                            <TextField id="outlined-basic" variant="outlined" className={classes.registerInput} fullWidth="true" InputProps={{
                                className: classes.input}}/>

                            <label className={classes.labelInput}>Password</label>
                            <TextField id="outlined-basic" type="password" variant="outlined" className={classes.registerInput} fullWidth="true" InputProps={{
                                className: classes.input}}/>
                            <Link to="/register" className={classes.loginLink}><span className={classes.forgotPassword}>Forgot Password</span></Link>
                            <Button variant="contained" color="primary" fullWidth="true" className={classes.buttonInput}>Daftar</Button>
                        </form>
                        <p className={classes.loginText}>Belum punya akun? Silahkan <Link to="/register" className={classes.loginLink}><span style={{color:"#FF2858"}}>Daftar.</span></Link></p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Login;