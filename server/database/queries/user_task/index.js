const getTasksByUserId = require('./getTasksByUserId');
const addUserTaskQuery = require('./addUserTask');
const updateUserTaskQuery = require('./updateUserTask');
const deleteUserTaskQuery = require('./deleteUserTask');
const getUsersTasksQuery = require('./getUsersTasks');
const getAllUsersTask = require('./getAllUsersTask');

module.exports = {
  getTasksByUserId,
  addUserTaskQuery,
  updateUserTaskQuery,
  deleteUserTaskQuery,
  getUsersTasksQuery,
  getAllUsersTask,
};
