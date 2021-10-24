const { clientError, serverError } = require('./error');

const {
  loginController,
  signupController,
  isAuthController,
  logoutController,
  updatePermissionController,
  updateSetting,
  getUserSetting,
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
  getUsersTasks,
} = require('./user_task');

const {
  getVisits, getUserVisits, addVisit, updateVisit, deleteVisit,
} = require('./visits');

const {
  getPayments, addPayment, updatePayment, deletePayment,
} = require('./payments');

const {
  getTaskComments, addComment, updateComment, deleteComment,
} = require('./comments');

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
  getTaskComments,
  addComment,
  updateComment,
  deleteComment,
  updateSetting,
  getUserSetting,
  getUsersTasks,
};
