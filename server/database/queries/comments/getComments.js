const connection = require('../../config/connection');

const getComments = () => {
  const sql = {
    text: 'SELECT users.username,users.id,users.avatar,comments.* FROM comments INNER JOIN users ON users.id=comments.user_id',
  };
  return connection.query(sql);
};

module.exports = getComments;
