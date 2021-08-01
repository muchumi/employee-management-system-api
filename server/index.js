import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


// Initializing our express application
const app = express();

// Using express to connect our post routes to application
// First parameter specifies the path for all our post routes
app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Connecting our server with a database
// https://www.mongodb.com/cloud/atlas
// atlas version of mongodb
const CONNECTION_URL = 'mongodb+srv://muchumi:miz30594@cluster0.6cjvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// Connecting to database
// mongoose function accepts two parameters as indicated
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// Eliminating warnings on our console
mongoose.set('useFindAndModify', false);