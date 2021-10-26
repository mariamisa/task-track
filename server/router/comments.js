const router = require('express').Router();

const {
  getTaskComments, addComment, updateComment, deleteComment,
} = require('../controller');
const {
  commentPermission,
} = require('../middleware/permission');

router.get('/task/:taskId/comments', getTaskComments); // get all comment for specific task
router.post('/task/:taskId/comments', commentPermission, addComment);
router.patch('/task/comments/:commentId', commentPermission, updateComment);
router.delete('/task/comments/:commentId', commentPermission, deleteComment);

module.exports = router;
