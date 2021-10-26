const connection = require('../../config/connection');

const getCommentId = (commentId) => {
  const sql = {
    text: 'SELECT user_id FROM comments WHERE id=$1',
    values: [commentId],
  };
  return connection.query(sql);
};

module.exports = getCommentId;
