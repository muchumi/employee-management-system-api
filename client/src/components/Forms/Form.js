import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button , Typography, Paper } from '@material-ui/core'; 
import FileBase from 'react-file-base64';
import useStyles from './styles.js';
import { createMovie } from '../../actions/movies.js';


const Form = () => {
    const [movieData, setMovieData] = useState({
        creator: '', title: '', description: '', tags: '', selectedFile: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMovie(movieData));
    }
    const clear = () => {

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete = "off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Post A Movie</Typography>
                <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth
                value={movieData.creator}
                onChange={(e) => setMovieData({ ... movieData, creator: e.target.value })}/>
                <TextField 
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
                value={movieData.title}
                onChange={(e) => setMovieData({ ... movieData, title: e.target.value})}/>
                <TextField
                name="description"
                variant="outlined"
                label="Description"
                fullWidth
                value={movieData.description}
                onChange={(e) => setMovieData({... movieData, description: e.target.value})}
                />
                <TextField
                name="tags"
                variant="outlined"
                label="Tags"
                fullWidth
                value={movieData.tags}
                onChange={(e) => setMovieData({... movieData, tags: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setMovieData({ ...movieData, selectedFile: base64})}/>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </div>
            </form>
        </Paper>
    );
}



export default Form;