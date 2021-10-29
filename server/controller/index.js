const { clientError, serverError } = require('./error');

const {
  loginController,
  signupController,
  isAuthController,
  logoutController,
  updatePermissionController,
  updateSetting,
  getUserSetting,
  updateAvatarController,
  updateUserInfo,
  updateAttachController,
  getUsers,
  getUsersById,
  deleteUser,
} = require('./user');

const {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
  updateAttachProtocolController,
  updateTaskAttachController,
  updateProtocolController,
} = require('./tasks');
const {
  getUserTasks,
  addUserTask,
  updateUserTask,
  deleteUserTask,
  getUsersTasks,
  getUsersTask,
} = require('./user_task');

const {
  getVisits, getUserVisits, addVisit, updateVisit, deleteVisit,
} = require('./visits');

const {
  getPayments, addPayment, updatePayment, deletePayment, updateAttachmentsPayment,
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
  updateAvatarController,
  updateUserInfo,
  updateAttachController,
  updateAttachProtocolController,
  updateTaskAttachController,
  updateProtocolController,
  updateAttachmentsPayment,
  getUsers,
  getUsersTask,
  getUsersById,
  deleteUser,
};
