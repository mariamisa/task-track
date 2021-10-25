const connection = require('../../config/connection');

const updateTask = ({
  name, protocol, attach, type, id,
}) => {
  const sql = {
    text: 'UPDATE tasks SET name = COALESCE($1,name),protocol = COALESCE($2,protocol),attach= COALESCE($3,attach),type= COALESCE($4,type) WHERE id=$5;',
    values: [name, protocol, attach, type, id],
  };
  return connection.query(sql);
};

module.exports = updateTask;
