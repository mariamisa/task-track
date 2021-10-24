const connection = require('../../config/connection');

const getUsersTasks = () => {
  const sql = {
    text: 'SELECT users.username,users.mobile,users.id,users.country,tasks.id,tasks.name,users.job_title,tasks_users.* FROM tasks_users INNER JOIN users ON tasks_users.user_id=users.id INNER JOIN tasks ON tasks_users.task_id=tasks.id',
  };
  return connection.query(sql);
};

module.exports = getUsersTasks;
