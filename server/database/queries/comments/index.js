const getCommentsByTaskId = require('./getCommentsByTaskId');
const addComment = require('./addComment');
const updateComment = require('./updateComment');
const deleteComment = require('./deleteComment');
const getCommentById = require('./getCommentById');
const getComments = require('./getComments');

module.exports = {
  getCommentsByTaskId, addComment, updateComment, deleteComment, getCommentById, getComments,
};
