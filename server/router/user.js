const router = require('express').Router();

const { isAuthController, updatePermissionController } = require('../controller');

router.get('/is-auth', isAuthController);
router.patch('/users/:id', updatePermissionController);

module.exports = router;
