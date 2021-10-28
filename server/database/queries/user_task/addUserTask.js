const connection = require('../../config/connection');

const addUserTask = ({
  status = 'onwork', userId, taskId,
}) => {
  const sql = {
    text: 'INSERT INTO tasks_users (status, user_id, task_id) VALUES ($1, $2, $3)',
    values: [status, userId, taskId],
  };
  return connection.query(sql);
};

module.exports = addUserTask;
