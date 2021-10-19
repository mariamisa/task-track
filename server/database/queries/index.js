const {
  createNewUser,
  getUserByMobile,
  getUserById,
  updateUserPermission,
  getUserPermission,
  updateTaskPermission,
  updateVisitPermission,
  updateSittingPermission,
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
};
