const signupController = require('./signup');
const loginController = require('./login');
const isAuthController = require('./isAuth');
const logoutController = require('./logout');
const updatePermissionController = require('./updatePermission');
const updateSetting = require('./updateSetting');
const getUserSetting = require('./getUserSetting');

module.exports = {
  signupController,
  loginController,
  isAuthController,
  logoutController,
  updatePermissionController,
  updateSetting,
  getUserSetting,
};
