const connection = require('../../config/connection');

const getCommentId = (id) => {
  const sql = {
    text: 'SELECT user_id FROM comments WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getCommentId;
