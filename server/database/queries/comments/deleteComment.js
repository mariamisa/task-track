const connection = require('../../config/connection');

const deleteComment = (id) => {
  const sql = {
    text: 'DELETE FROM comments WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteComment;
