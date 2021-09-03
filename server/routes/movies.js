import express from 'express';

import { getMovies, createMovie, editMovie, deleteMovie, likeMovie } from '../controllers/movies.js';

const router = express.Router();

router.get('/', getMovies);
router.post('/', createMovie);
router.patch('/:id', editMovie);
router.delete('/:id', deleteMovie);
router.patch('/:id/likeMovie', likeMovie);

export default router;