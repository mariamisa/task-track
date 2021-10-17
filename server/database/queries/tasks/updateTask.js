const connection = require('../../config/connection');

const updateTask = ({
  protocol, attatch, type, id,
}) => {
  const sql = {
    text: 'UPDATE tasks SET protocol = COALESCE($1,protocol),attatch= COALESCE($2,attatch),type= COALESCE($3,type) WHERE id=$4;',
    values: [protocol, attatch, type, id],
  };
  return connection.query(sql);
};

module.exports = updateTask;
