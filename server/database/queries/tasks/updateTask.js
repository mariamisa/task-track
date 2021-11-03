const connection = require('../../config/connection');

const updateTask = ({
  name,
  type,
  date,
  deadline,
  visibility,
  completed,
  id,
}) => {
  const sql = {
    text: 'UPDATE tasks SET name = COALESCE($1,name),type= COALESCE($2,type),date = COALESCE($3,date),deadline= COALESCE($4,deadline),visibility= COALESCE($5,visibility),completed=COALESCE($6,completed) WHERE id=$7;',
    values: [name, type, date, deadline, visibility, completed, id],
  };
  return connection.query(sql);
};

module.exports = updateTask;
