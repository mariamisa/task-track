const router = require('express').Router();
const { signupController } = require('../controller');
const { signupValidation } = require('../middleware/validation');

const { isAuthController, updatePermissionController } = require('../controller');
const { userPermission } = require('../middleware/permission');

router.get('/is-auth', isAuthController);
router.post('/signup', userPermission, signupValidation, signupController);
router.patch('/users/:id/permission/:permissionType', userPermission, updatePermissionController);

module.exports = router;
