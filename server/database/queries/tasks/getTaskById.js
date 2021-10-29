const connection = require('../../config/connection');

const getTaskById = (id) => {
  const sql = {
    text: 'SELECT * FROM tasks WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getTaskById;
