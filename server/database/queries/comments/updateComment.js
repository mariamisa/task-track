const connection = require('../../config/connection');

const updateComment = ({ comment, commentId }) => {
  const sql = {
    text: 'UPDATE comments SET comment = COALESCE($1,comment) WHERE id=$2',
    values: [comment, commentId],
  };
  return connection.query(sql);
};

module.exports = updateComment;
