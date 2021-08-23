// import { mongoose } from "mongoose";
import CreateMovies from "../models/createMovie.js";

// All handlers for our routes go here
// All the logic goes in here

// Our get movies route
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

// Our create movie route
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

// Edit movie route
export const editMovie = async (req, res) => {
    const { id: movie_id } = req.params;
    const post = req.body;
    if(!Mongoose.Types.ObjectId.isValid(movie_id)) return res.status(404).send('No movie with that id');
    const editedMovie = await CreateMovies.findByIdandUpdate(movie_id, post, { new: true });

    res.json(editedMovie);
}
