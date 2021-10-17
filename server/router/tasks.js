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
} = require('../controller');

router.get('/tasks', getTasks);
router.post('/tasks', addTask);
router.delete('/tasks/:id', deleteTask);
router.patch('/tasks/:id', updateTask);

router.get('/user/tasks', getUserTasks);
router.post('/user/tasks/:taskId', addUserTask);
router.patch('/user/tasks/:taskId', updateUserTask);
router.delete('/user/tasks/:userId/:taskId', deleteUserTask);

module.exports = router;
