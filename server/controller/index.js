const { clientError, serverError } = require('./error');

const {
  loginController,
  signupController,
  isAuthController,
  logoutController,
  updatePermissionController,
} = require('./user');

const {
  getTasks,
  addTask,
  getUserTasks,
} = require('./tasks');

module.exports = {
  clientError,
  serverError,
  signupController,
  loginController,
  isAuthController,
  logoutController,
  updatePermissionController,
  getTasks,
  addTask,
  getUserTasks,
};
