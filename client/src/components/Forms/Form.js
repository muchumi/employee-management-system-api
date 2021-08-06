import React, { useState } from 'react';
import { TextField, Button , Typography, Paper } from '@material-ui/core'; 
import useStyles from './styles.js';


const Form = () => {
    const [movieData, setMovieData] = useState({
        creator: '', title: '', description: '', tags: '', selectedFile: ''
    });
    const classes = useStyles();
    const handleSubmit = () => {

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete = "off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Post A Movie</Typography>
                <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth
                value={movieData.creator}
                onChange={(e) => setMovieData({ ... movieData, creator: e.target.value })}/>
            </form>
        </Paper>
    );
}



export default Form;