const connection = require('../../config/connection');

const deleteTask = (id) => {
  const sql = {
    text: 'DELETE FROM tasks WHERE id=$1 ',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteTask;
