const getTasksByUserId = require('./getTasksByUserId');
const addUserTaskQuery = require('./addUserTask');
const updateUserTaskQuery = require('./updateUserTask');
const deleteUserTaskQuery = require('./deleteUserTask');

module.exports = {
  getTasksByUserId, addUserTaskQuery, updateUserTaskQuery, deleteUserTaskQuery,
};
