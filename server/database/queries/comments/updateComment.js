const connection = require('../../config/connection');

const updateComment = ({ comment, id }) => {
  const sql = {
    text: 'UPDATE comments SET comment = COALESCE($1,comment) WHERE id=$2',
    values: [comment, id],
  };
  return connection.query(sql);
};

module.exports = updateComment;
