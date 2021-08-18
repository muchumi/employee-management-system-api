import express from 'express';

import { getMovies, createMovie, editMovie } from '../controllers/movies.js';

const router = express.Router();

router.get('/', getMovies);
router.post('/', createMovie);
router.patch('/:id', editMovie);

export default router;