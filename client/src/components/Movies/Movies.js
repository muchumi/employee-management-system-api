import React from 'react';
import { useSelector } from 'react-redux';
import Movie from './Movie/Movie.js';
import useStyles from './styles.js';

const Movies = () => {
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();
    console.log(movies);
    return(
        <div>
            <h1>Movies</h1>
            <Movie/>
            <Movie/>
        </div>
    );
}


export default Movies;