const signupController = require('./signup');
const loginController = require('./login');
const isAuthController = require('./isAuth');
const logoutController = require('./logout');
const updatePermissionController = require('./updatePermission');

module.exports = {
  signupController,
  loginController,
  isAuthController,
  logoutController,
  updatePermissionController,
};
