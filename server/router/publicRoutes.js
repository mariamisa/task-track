/* eslint-disable no-unused-vars */
const router = require('express').Router();

const {
  loginController,
  logoutController,
  signupController,
} = require('../controller');
const {
  loginValidation, signupValidation,
} = require('../middleware/validation');

router.post('/signin', loginValidation, loginController);
// router.post('/signup', signupValidation, signupController);

router.get('/logout', logoutController);

module.exports = router;
