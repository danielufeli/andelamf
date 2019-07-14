import express from 'express';

import authController from '../controllers/authController';
import allValidator from '../middleware/allValidator';
import validateUser from '../helpers/validateuser';
import checkUserReg from '../middleware/checkUserReg';
import checkUserEmail from '../middleware/checkUserEmail';
import validateSignin from '../helpers/signin';
import checkValue from '../middleware/checkValue';

const router = express.Router();

const { userSignup, userSignin } = authController;
const { checkEmailSignin } = checkUserEmail;

router.post('/signup', checkValue(6), allValidator(validateUser), checkUserReg('email'), checkUserReg('mobileno'), userSignup);

router.post('/signin', allValidator(validateSignin), checkEmailSignin, userSignin);

export default router;
