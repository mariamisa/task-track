const router = require('express').Router();
const { signupController } = require('../controller');
const { signupValidation } = require('../middleware/validation');

const { isAuthController, updatePermissionController, updateSetting } = require('../controller');
const { userPermission, settingPermission } = require('../middleware/permission');

router.get('/is-auth', isAuthController);
router.post('/signup', userPermission, signupValidation, signupController);
router.patch('/users/:id/permission/:permissionType', userPermission, updatePermissionController);
router.patch('/users/settings', settingPermission, updateSetting);
module.exports = router;
