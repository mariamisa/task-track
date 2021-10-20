const connection = require('../../config/connection');

const updateVisitPermission = ({ permissionToString: permission, id }) => {
  const sql = {
    text: 'UPDATE users SET visit_permission = COALESCE($1,visit_permission) WHERE id=$2;',
    values: [permission, id],
  };
  return connection.query(sql);
};

module.exports = updateVisitPermission;
