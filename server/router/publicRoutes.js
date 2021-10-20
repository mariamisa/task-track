const router = require('express').Router();

const {
  loginController,
  logoutController,
} = require('../controller');
const {
  loginValidation,
} = require('../middleware/validation');

router.post('/signin', loginValidation, loginController);
router.get('/logout', logoutController);

module.exports = router;
