const connection = require('../../config/connection');

const addNewTask = ({
  protocol, attatch, type,
}) => {
  const sql = {
    text: 'INSERT INTO tasks (protocol, attatch, type) VALUES ($1, $2, $3)',
    values: [protocol, attatch, type],
  };
  return connection.query(sql);
};

module.exports = addNewTask;
