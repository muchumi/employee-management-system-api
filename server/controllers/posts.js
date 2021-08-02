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

// Our post movie route
export const createMovies = async (req, res) => {
    const post = req.body;
    const newPost = new PostMovie(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({
            message: error.message
        });
    }
}