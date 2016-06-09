import express from 'express';
import userRoutes from './user';

const router = express.Router();	

/**
 * GET Route - localhost/
 * base route
 */
router.get('/', (req, res) =>
	res.send('Welcome to the API')
);

// mount routes
router.use('/users', userRoutes);

export default router;