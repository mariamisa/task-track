const connection = require('../../config/connection');

const addUserTask = ({
  date, deadline, visibility, userId, taskId,
}) => {
  const sql = {
    text: 'INSERT INTO tasks_users (date, deadline, visibility, user_id, task_id) VALUES ($1, $2, $3,$4,$5)',
    values: [date, deadline, visibility, userId, taskId],
  };
  return connection.query(sql);
};

module.exports = addUserTask;
