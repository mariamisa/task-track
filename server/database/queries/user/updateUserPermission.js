const connection = require('../../config/connection');

const updateUserPermission = ({ permissionToString: permission, id }) => {
  const sql = {
    text: 'UPDATE users SET user_permission = COALESCE($1,user_permission) WHERE id=$2;',
    values: [permission, id],
  };
  return connection.query(sql);
};

module.exports = updateUserPermission;
