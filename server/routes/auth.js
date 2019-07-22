import express from 'express';

import authController from '../controllers/authController';
import allValidator from '../middleware/allValidator';
import checkUserReg from '../middleware/checkUserReg';
import checkUserEmail from '../middleware/checkUserEmail';
import validateInput from '../helpers/validateInput';

const router = express.Router();

const { userSignup, userSignin } = authController;
const { checkEmailSignin } = checkUserEmail;
const { signupInput, signinInput } = validateInput;

router.post('/signup', allValidator(signupInput), checkUserReg('email'), userSignup);

router.post('/signin', allValidator(signinInput), checkEmailSignin, userSignin);

export default router;
