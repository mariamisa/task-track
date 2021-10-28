const connection = require('../../config/connection');

const updateTask = ({
  name, type, date, deadline, visibility, id,
}) => {
  const sql = {
    text: 'UPDATE tasks SET name = COALESCE($1,name),type= COALESCE($2,type),date = COALESCE($3,date),deadline= COALESCE($4,deadline),visibility= COALESCE($5,visibility) WHERE id=$6;',
    values: [name, type, date, deadline, visibility, id],
  };
  return connection.query(sql);
};

module.exports = updateTask;
