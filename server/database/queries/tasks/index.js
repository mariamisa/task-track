const getAllTasks = require('./getAllTasks');
const addNewTask = require('./addNewTask');
const deleteTaskQuery = require('./deleteTask');
const updateTaskQuery = require('./updateTask');
const updateTaskAttach = require('./updateTaskAttach');
const updateTaskProtocol = require('./updateProtocol');
const getTaskById = require('./getTaskById');

module.exports = {
  getAllTasks,
  addNewTask,
  deleteTaskQuery,
  updateTaskQuery,
  updateTaskAttach,
  updateTaskProtocol,
  getTaskById,
};
