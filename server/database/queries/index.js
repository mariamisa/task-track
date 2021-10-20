const {
  createNewUser,
  getUserByMobile,
  getUserById,
  updateUserPermission,
  getUserPermission,
  updateTaskPermission,
  updateVisitPermission,
  updateSittingPermission,
  updatePaymentPermission,
} = require('./user');

const {
  getAllTasks,
  addNewTask,
  deleteTaskQuery,
  updateTaskQuery,
} = require('./tasks');
const {
  getTasksByUserId,
  addUserTaskQuery,
  updateUserTask,
  deleteUserTaskQuery,
} = require('./user_task');

const {
  getAllVisits,
  getUserVisits,
  addNewVisit,
  updateVisitQuery,
  deleteVisit,
} = require('./visits');
const {
  getAllPayment,
  addNewPayment,
  deletePaymentQuery,
  updatePaymentQuery,
} = require('./payments');

const {
  getCommentsByTaskId, addComment, updateComment, deleteComment, getCommentById,
} = require('./comments');

module.exports = {
  createNewUser,
  getUserByMobile,
  getUserById,
  updateUserPermission,
  getAllTasks,
  getTasksByUserId,
  addNewTask,
  deleteTaskQuery,
  updateTaskQuery,
  addUserTaskQuery,
  updateUserTask,
  deleteUserTaskQuery,
  getAllVisits,
  getUserVisits,
  addNewVisit,
  updateVisitQuery,
  deleteVisit,
  getUserPermission,
  updateTaskPermission,
  updateVisitPermission,
  updateSittingPermission,
  updatePaymentPermission,
  getAllPayment,
  addNewPayment,
  deletePaymentQuery,
  updatePaymentQuery,
  getCommentsByTaskId,
  addComment,
  updateComment,
  deleteComment,
  getCommentById,

};
