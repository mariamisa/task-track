const router = require('express').Router();
const { signupController } = require('../controller');
const { signupValidation } = require('../middleware/validation');

const {
  isAuthController,
  updatePermissionController,
  updateSetting,
  getUserSetting,
  updateAvatarController,
} = require('../controller');
const { userPermission, settingPermission } = require('../middleware/permission');

router.get('/is-auth', isAuthController);
router.post('/signup', userPermission, signupValidation, signupController);
router.patch('/users/:id/permission/:permissionType', userPermission, updatePermissionController);

router.get('/users/settings', settingPermission, getUserSetting);
router.patch('/users/settings', settingPermission, updateSetting);
router.patch('/users/avatar', updateAvatarController);
module.exports = router;
