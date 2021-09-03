import { useDebugValue } from "react";

export default (movies = [], action) => {
    switch(action.type){
        case 'DELETE':
            return movies.filter((movie) => movie.movie_id !== action.payload);
        case 'UPDATE':
            return movies.map((movie) => movie.movie_id === action.payload.movie_id ? action.payload : movie);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [... movies, action.payload];
        default:
            return movies;
    }
}