const connection = require('../../config/connection');

const updateUserTask = ({
  date, deadline, visibility, status, userId, taskId,
}) => {
  const sql = {
    text: 'UPDATE users_tasks SET date = COALESCE($1,date),deadline= COALESCE($2,deadline),visibility= COALESCE($3,visibility),status= COALESCE($4,status) WHERE user_id=$5 AND task_id=$6',
    values: [date, deadline, visibility, status, userId, taskId],
  };
  return connection.query(sql);
};

module.exports = updateUserTask;
