const connection = require('../../config/connection');

const addUserTask = ({
  date = new Date().toISOString(), deadline, visibility = false, status = 'onwork', userId, taskId,
}) => {
  const sql = {
    text: 'INSERT INTO tasks_users (date, deadline, visibility, status, user_id, task_id) VALUES ($1, $2, $3,$4,$5,$6)',
    values: [date, deadline, visibility, status, userId, taskId],
  };
  return connection.query(sql);
};

module.exports = addUserTask;
