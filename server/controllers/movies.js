import mongoose from "mongoose";
import Movie from "../../client/src/components/Movies/Movie/Movie.js";
import CreateMovies from "../models/createMovie.js";

// All handlers for our routes go here
// All the logic goes in here

// Get movies function
export const getMovies = async (req, res) => {
    try{
        const allMovies = await CreateMovies.find();
        res.status(200).json(allMovies);
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
}

// Create movie function
export const createMovie = async (req, res) => {
    const post = req.body;
    const newMovie = new CreateMovies(post);
    try{
        await newMovie.save();
        res.status(201).json(newMovie);
    }catch(error){
        res.status(409).json({
            message: error.message
        });
    }
}

// Edit movie function
export const editMovie = async (req, res) => {
    const { id: movie_id } = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(movie_id)) return res.status(404).send('Resource Not Found');
    // The { new: true } property ensures that we get the updated version of our movie that is been updated
    const editedMovie = await CreateMovies.findByIdandUpdate(movie_id, { ... movie, movie_id }, { new: true });

    res.json(editedMovie);
}

// Delete movie function
export const deleteMovie = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Resource Not Found');

    await CreateMovies.findByIdAndRemove(id);

    res.json({ message: 'Movie deleted successfully'});

}

// Like a movie function
export const likeMovie = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Resource Not Found');
    const movie = await CreateMovies.findById(id);
    const likedMovie = await CreateMovies.findByIdAndUpdate(id, { likeCount: movie.likeCount + 1}, { new: true });
    res.json(likedMovie); 
}