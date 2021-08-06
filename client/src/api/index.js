// In this ./api/index.js file is where all API calls are made
import axios from 'axios';

const url = 'http://localhost:5000/movies';

export const fetchMovies = () => axios.get(url);


