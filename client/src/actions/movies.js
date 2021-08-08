import * as api from '../api';
// Actions are objects with type and payload
// Actions creators
// Functions that return actions
export const getMovies = () => async (dispatch) => {
    try{
        const { data } = await api.fetchMovies();
        dispatch({type: 'FETCH_ALL', payload: data });
    }catch(error){
        console.log(error.message);
    }
}

export const createMovie = (post) => async (dispatch) => {
    try{
        // Data below is response
        const { data } = await api.createMovie(post);
        dispatch({type: 'CREATE', payload: data});
    }catch(error){
        console.log(error.message);
    }
}