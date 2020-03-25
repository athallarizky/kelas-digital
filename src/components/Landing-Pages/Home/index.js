import React from 'react';
import {useStyles} from './style';

const Home = () => {
    const classes = useStyles();   
    return(
        <div className={classes.wrapper}>
            <h1 className={classes.test}>Home Page</h1>
            <p>njashjdshjsakhdjsakh</p>
        </div>
    )
}

export default Home;