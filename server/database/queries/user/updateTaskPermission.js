const connection = require('../../config/connection');

const updateTaskPermission = ({ permissionToString: permission, id }) => {
  const sql = {
    text: 'UPDATE users SET task_permission = COALESCE($1,task_permission) WHERE id=$2;',
    values: [permission, id],
  };
  return connection.query(sql);
};

module.exports = updateTaskPermission;
