const connection = require('../../config/connection');

const updateUserPermission = ({ permissionToString: permission, id }) => {
  const sql = {
    text: 'UPDATE users SET permission = COALESCE($1,permission) WHERE id=$2;',
    values: [permission, id],
  };
  return connection.query(sql);
};

module.exports = updateUserPermission;
