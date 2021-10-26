const router = require('express').Router();

const {
  getTasks,
  getUserTasks,
  addTask,
  deleteTask,
  updateTask,
  addUserTask,
  updateUserTask,
  deleteUserTask,
  getUsersTasks,
  updateTaskAttachController,
  updateProtocolController,
} = require('../controller');
const {
  taskPermission,
} = require('../middleware/permission');

router.get('/tasks', getTasks);
router.post('/tasks', taskPermission, addTask);
router.delete('/tasks/:id', taskPermission, deleteTask);
router.patch('/tasks/:id', taskPermission, updateTask);
router.patch('/tasks/:id/attach', taskPermission, updateTaskAttachController);
router.patch('/tasks/:id/protocol', taskPermission, updateProtocolController);

router.get('/users/tasks', taskPermission, getUsersTasks);

router.get('/user/tasks', getUserTasks);
router.post('/user/:userId/tasks/:taskId', addUserTask);
router.patch('/user/:userId/tasks/:taskId', updateUserTask);
router.delete('/user/:userId/tasks/:taskId', deleteUserTask);

module.exports = router;
