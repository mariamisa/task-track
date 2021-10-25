const router = require('express').Router();
const { signupController } = require('../controller');
const { signupValidation } = require('../middleware/validation');

const {
  isAuthController,
  updatePermissionController,
  updateSetting,
  getUserSetting,
  updateAvatarController,
  updateUserInfo,
  updateAttachController,
  getUsers,
} = require('../controller');
const { userPermission, settingPermission } = require('../middleware/permission');

router.get('/is-auth', isAuthController);
router.get('/users', userPermission, getUsers);
router.post('/users', userPermission, signupValidation, signupController);
router.patch('/users/:id/permission/:permissionType', userPermission, updatePermissionController);

router.get('/users/settings', settingPermission, getUserSetting);
router.patch('/users/settings', settingPermission, updateSetting);

router.patch('/users/information/:id', userPermission, updateUserInfo);
router.patch('/users/avatar', updateAvatarController);
router.patch('/users/attach', updateAttachController);

module.exports = router;
