const connection = require('../../config/connection');

const updateUserTask = ({
  status, userId, taskId,
}) => {
  const sql = {
    text: 'UPDATE tasks_users SET status= COALESCE($1,status) WHERE user_id=$2 AND task_id=$3 RETURNING *',
    values: [status, userId, taskId],
  };
  return connection.query(sql);
};

module.exports = updateUserTask;
