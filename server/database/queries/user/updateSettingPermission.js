const connection = require('../../config/connection');

const updateSettingPermission = ({ permissionToString: permission, id }) => {
  const sql = {
    text: 'UPDATE users SET setting_permission = COALESCE($1,setting_permission) WHERE id=$2 RETURNING setting_permission;',
    values: [permission, id],
  };
  return connection.query(sql);
};

module.exports = updateSettingPermission;
