const connection = require('../../config/connection');

const deleteComment = (commentId) => {
  const sql = {
    text: 'DELETE FROM comments WHERE id=$1',
    values: [commentId],
  };
  return connection.query(sql);
};

module.exports = deleteComment;
