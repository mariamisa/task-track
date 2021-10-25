const connection = require('../../config/connection');

const updateTask = ({
  name, type, id,
}) => {
  const sql = {
    text: 'UPDATE tasks SET name = COALESCE($1,name),type= COALESCE($2,type) WHERE id=$3;',
    values: [name, type, id],
  };
  return connection.query(sql);
};

module.exports = updateTask;
