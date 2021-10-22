const getCommentsByTaskId = require('./getCommentsByTaskId');
const addComment = require('./addComment');
const updateComment = require('./updateComment');
const deleteComment = require('./deleteComment');
const getCommentById = require('./getCommentById');

module.exports = {
  getCommentsByTaskId, addComment, updateComment, deleteComment, getCommentById,
};
