const getTasksByUserId = require('./getTasksByUserId');
const addUserTaskQuery = require('./addUserTask');
const updateUserTaskQuery = require('./updateUserTask');
const deleteUserTaskQuery = require('./deleteUserTask');
const getUsersTasksQuery = require('./getUsersTasks');

module.exports = {
  getTasksByUserId, addUserTaskQuery, updateUserTaskQuery, deleteUserTaskQuery, getUsersTasksQuery,
};
