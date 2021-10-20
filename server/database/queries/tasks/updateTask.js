const connection = require('../../config/connection');

const updateTask = ({
  name, protocol, attatch, type, id,
}) => {
  const sql = {
    text: 'UPDATE tasks SET name = COALESCE($1,name),protocol = COALESCE($2,protocol),attatch= COALESCE($3,attatch),type= COALESCE($4,type) WHERE id=$5;',
    values: [name, protocol, attatch, type, id],
  };
  return connection.query(sql);
};

module.exports = updateTask;
