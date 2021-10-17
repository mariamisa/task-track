const connection = require('../../config/connection');

const deleteTask = ({ userId, taskId }) => {
  const sql = {
    text: 'DELETE FROM tasks_users WHERE user_id=$1 AND task_id=$2',
    values: [userId, taskId],
  };
  return connection.query(sql);
};

module.exports = deleteTask;
