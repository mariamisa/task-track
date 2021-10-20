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
  deleteTask,
  updateTask,
} = require('./tasks');
const {
  getUserTasks,
  addUserTask,
  updateUserTask,
  deleteUserTask,
} = require('./user_task');

const {
  getVisits, getUserVisits, addVisit, updateVisit, deleteVisit,
} = require('./visits');

const {
  getPayments, addPayment, updatePayment, deletePayment,
} = require('./payments');

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
  deleteTask,
  updateTask,
  addUserTask,
  updateUserTask,
  deleteUserTask,
  getVisits,
  getUserVisits,
  addVisit,
  updateVisit,
  deleteVisit,
  getPayments,
  addPayment,
  updatePayment,
  deletePayment,
};
