import React from 'react';
import Movie from './Movie/Movie.js';
import useStyles from './styles.js';

const Movies = () => {
    const classes = useStyles();
    return(
        <div>
            <h1>Movies</h1>
            <Movie/>
            <Movie/>
        </div>
    );
}


export default Movies;