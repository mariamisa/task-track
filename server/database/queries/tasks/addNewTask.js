const connection = require('../../config/connection');

const addNewTask = ({
  name, protocol = '', attach = '', type = 'normal', date = new Date().toISOString(), deadline, visibility = false,
}) => {
  const sql = {
    text: 'INSERT INTO tasks (name,protocol, attach, type,date,deadline,visibility) VALUES ($1, $2, $3,$4,$5,$6,$7) RETURNING id',
    values: [name, protocol, attach, type, date, deadline, visibility],
  };
  return connection.query(sql);
};

module.exports = addNewTask;
