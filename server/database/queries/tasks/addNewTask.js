const connection = require('../../config/connection');

const addNewTask = ({
  name, protocol, attach, type,
}) => {
  const sql = {
    text: 'INSERT INTO tasks (name,protocol, attach, type) VALUES ($1, $2, $3,$4)',
    values: [name, protocol, attach, type],
  };
  return connection.query(sql);
};

module.exports = addNewTask;
