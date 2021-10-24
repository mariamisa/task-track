const router = require('express').Router();

const {
  getTaskComments, addComment, updateComment, deleteComment,
} = require('../controller');
const {
  commentPermission,
} = require('../middleware/permission');

router.get('/task/:id/comments', getTaskComments); // get all comment for specific task
router.post('/comments/:taskId', commentPermission, addComment);
router.patch('/comments/:id', commentPermission, updateComment);
router.delete('/comments/:id', commentPermission, deleteComment);

module.exports = router;
