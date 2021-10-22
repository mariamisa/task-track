const connection = require('../../config/connection');

const addComment = ({
  userId, taskId, comment,
}) => {
  const sql = {
    text: 'INSERT INTO comments (user_id, task_id, comment) VALUES ($1, $2, $3)',
    values: [userId, taskId, comment],
  };
  return connection.query(sql);
};

module.exports = addComment;
