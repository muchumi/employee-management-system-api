import { useDebugValue } from "react";

export default (movies = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return movies;
        case 'CREATE':
            return movies;
        default:
            return movies;
    }
}