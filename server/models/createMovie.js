import mongoose from 'mongoose';

// Creating a mongoose schema
// Each post item will have the following listed properties
const createMoviesSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// Turning our schema into a model
const CreateMovies = mongoose.model('CreateMovies', createMoviesSchema);

export default CreateMovies;