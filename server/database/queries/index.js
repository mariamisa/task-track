const {
  createNewUser,
  getUserByMobile,
  getUserById,
  updateUserPermission,
  getUserPermission,
  updateTaskPermission,
  updateVisitPermission,
  updateSettingPermission,
  updatePaymentPermission,
  updateAvatarImage,
  updateUserInfo,
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
  updateUserTaskQuery,
  deleteUserTaskQuery,
  getUsersTasksQuery,
} = require('./user_task');

const {
  getAllVisits,
  getUserVisits,
  addNewVisit,
  updateVisitQuery,
  deleteVisit,
  getVisitById,
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
const {
  addSettingQuery,
  deleteSettingQuery,
  updateSettingQuery,
  getUserSettingQuery,
} = require('./settings');

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
  updateUserTaskQuery,
  deleteUserTaskQuery,
  getAllVisits,
  getUserVisits,
  addNewVisit,
  updateVisitQuery,
  deleteVisit,
  getVisitById,
  getUserPermission,
  updateTaskPermission,
  updateVisitPermission,
  updateSettingPermission,
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
  addSettingQuery,
  deleteSettingQuery,
  updateSettingQuery,
  getUserSettingQuery,
  getUsersTasksQuery,
  updateAvatarImage,
  updateUserInfo,
};
