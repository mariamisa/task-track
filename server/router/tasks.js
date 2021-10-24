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
} = require('../controller');
const {
  taskPermission,
} = require('../middleware/permission');

router.get('/user/tasks', getUserTasks);
router.post('/user/tasks/:taskId', addUserTask);
router.patch('/user/tasks/:taskId', updateUserTask);
router.delete('/user/tasks/:userId/:taskId', deleteUserTask);

router.get('/tasks', taskPermission, getTasks);
router.get('/users/tasks', taskPermission, getUsersTasks);
router.post('/tasks', taskPermission, addTask);
router.delete('/tasks/:id', taskPermission, deleteTask);
router.patch('/tasks/:id', taskPermission, updateTask);

module.exports = router;
