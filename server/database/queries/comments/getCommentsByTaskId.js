const connection = require('../../config/connection');

const getCommentsByTaskId = (taskId) => {
  const sql = {
    text: 'SELECT * FROM comments WHERE task_id=$1',
    values: [taskId],
  };
  return connection.query(sql);
};

module.exports = getCommentsByTaskId;
