const {
  createNewUser, getUserByMobile, getUserById, updateUserPermission,
} = require('./user');

const {
  getAllTasks, addNewTask, deleteTaskQuery, updateTaskQuery,
} = require('./tasks');
const {
  getTasksByUserId, addUserTaskQuery, updateUserTask, deleteUserTaskQuery,
} = require('./user_task');

const { getAllVisits, getUserVisits, addNewVisit } = require('./visits');

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
};
