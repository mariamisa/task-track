const router = require('express').Router();

const { getTasks, getUserTasks, addTask } = require('../controller');

router.get('/tasks', getTasks);
router.post('/tasks', addTask);
router.get('/user/tasks/:id', getUserTasks);

module.exports = router;
