import express from 'express';
import userCtrl from '../controllers/user';

const router = express.Router();	// eslint-disable-line new-cap

// router.route('/')
	
// 	/**
// 	 * GET - localhost/users/
// 	 * get all users
// 	 */
// 	.get(userCtrl.getAll)

// 	/**
// 	 * POST - localhost/users/
// 	 * add new user
// 	 */
// 	.post(userCtrl.addNew);

// router.route('/:userId')
	
// 	/**
// 	 * GET - localhost/users/:user_id
// 	 * get a specific user
// 	 */
// 	.get(userCtrl.getOne);

export default router;