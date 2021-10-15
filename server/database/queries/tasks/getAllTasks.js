const connection = require('../../config/connection');

const getAllTasks = () => {
  const sql = {
    text: 'SELECT * FROM tasks',
  };
  return connection.query(sql);
};

module.exports = getAllTasks;
