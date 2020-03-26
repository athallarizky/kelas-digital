import React from 'react';
import {useStyles} from './style';
import TextField from '@material-ui/core/TextField';

const SearchBar = () =>{
    const classes = useStyles();
    return(
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Cari Course..." variant="outlined" />
            </form>
        </div>
    )
    
}

export default SearchBar;