const getTasks = require('./getTasks');
const addTask = require('./addTask');
const updateTask = require('./updateTask');
const deleteTask = require('./deleteTask');
const updateTaskAttachController = require('./updateAttach');
const updateProtocolController = require('./updateProtocol');

module.exports = {
  getTasks, addTask, updateTask, deleteTask, updateTaskAttachController, updateProtocolController,
};
