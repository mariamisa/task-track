const connection = require('../../config/connection');

const getTasksByUserId = (id) => {
  const sql = {
    text: 'SELECT * FROM tasks_users WHERE user_id=$1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getTasksByUserId;
