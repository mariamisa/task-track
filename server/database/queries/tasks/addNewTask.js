const connection = require('../../config/connection');

const addNewTask = ({
  name, protocol, attatch, type,
}) => {
  const sql = {
    text: 'INSERT INTO tasks (name,protocol, attatch, type) VALUES ($1, $2, $3,$4)',
    values: [name, protocol, attatch, type],
  };
  return connection.query(sql);
};

module.exports = addNewTask;
