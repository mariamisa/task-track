const signupController = require('./signup');
const loginController = require('./login');
const isAuthController = require('./isAuth');
const logoutController = require('./logout');
const updatePermissionController = require('./updatePermission');
const updateSetting = require('./updateSetting');
const getUserSetting = require('./getUserSetting');
const updateAvatarController = require('./updateAvatar');
const updateUserInfo = require('./updateUser');
const updateAttachController = require('./updateAttach');

module.exports = {
  signupController,
  loginController,
  isAuthController,
  logoutController,
  updatePermissionController,
  updateSetting,
  getUserSetting,
  updateAvatarController,
  updateUserInfo,
  updateAttachController,
};
