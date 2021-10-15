const {
  createNewUser, getUserByMobile, getUserById, updateUserPermission,
} = require('./user');

const { getAllTasks, getTasksByUserId, addNewTask } = require('./tasks');

module.exports = {
  createNewUser,
  getUserByMobile,
  getUserById,
  updateUserPermission,
  getAllTasks,
  getTasksByUserId,
  addNewTask,
};
