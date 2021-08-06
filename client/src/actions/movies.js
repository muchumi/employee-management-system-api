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