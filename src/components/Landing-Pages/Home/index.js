import React from 'react';
import {useStyles} from './style';

import SearchBar from '../../Shared/Search-Bar';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const Home = () => {
    const classes = useStyles();   
    return(
        <div className={classes.wrapper}>
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
                       
        </div>
    )
}

export default Home;