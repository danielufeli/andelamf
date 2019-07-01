import express from 'express';

import authController from '../controllers/authController';
import allValidator from '../middleware/allValidator';
import validateUser from '../helpers/validateuser';
import checkUser from '../middleware/checkUser';

const router = express.Router();
const { checkUserEmail, checkUserMobile } = checkUser;
const { userSignup } = authController;

router.post('/signup', allValidator(validateUser), checkUserEmail, checkUserMobile, userSignup);

export default router;
