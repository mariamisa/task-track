const connection = require('../../config/connection');

const updateSittingPermission = ({ permissionToString: permission, id }) => {
  const sql = {
    text: 'UPDATE users SET sitting_permission = COALESCE($1,sitting_permission) WHERE id=$2;',
    values: [permission, id],
  };
  return connection.query(sql);
};

module.exports = updateSittingPermission;
