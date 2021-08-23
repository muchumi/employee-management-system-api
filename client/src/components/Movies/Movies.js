import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Movie from './Movie/Movie.js';
import useStyles from './styles.js';

const Movies = () => {
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();
    console.log(movies);
    return(
        !movies.length ? <CircularProgress /> : (
            <Grid className = {classes.container} container alignItems = "stretch" spacing={3}>
                {movies.map((movie) => (
                    <Grid key={movie.movie_id} item xs={12} sm={6}>
                        <Movie movie={movie}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}


export default Movies;