import * as api from '../api';
// Actions are objects with type and payload
// Actions creators
// Functions that return actions

// A function that gets all movies
export const getMovies = () => async (dispatch) => {
    try{
        const { data } = await api.fetchMovies();
        dispatch({type: 'FETCH_ALL', payload: data });
    }catch(error){
        console.log(error);
    }
}

// A function that creates a movie
export const createMovie = (post) => async (dispatch) => {
    try{
        // Data below is response
        const { data } = await api.createMovie(post);
        dispatch({type: 'CREATE', payload: data});
    }catch(error){
        console.log(error);
    }
}

// A function that updates a movie
export const updateMovie = (id, post) => async (dispatch) => {
    try{
        const { data } = await api.updateMovie(id, post);
        dispatch({ type: 'UPDATE', payload: data});
    }catch(error){
        console.log(error);
    }
}

// A function that deletes a movie
export const deleteMovie = (id) => async (dispatch) => {
    try {
        await api.deleteMovie(id);

        dispatch({ type: 'DELETE', payload: id });

    } catch (error) {
        console.log(error);        
    }
}

// A function that likes a movie
export const likeMovie = (id) => async(dispatch) => {
    try {
        const { data } = await api.likeMovie(id);
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);   
    }
}

