import express from 'express';

import { getMovies, createMovies } from '../controllers/movies.js';

const router = express.Router();

router.get('/', getMovies);
router.post('/', createMovies);

export default router;