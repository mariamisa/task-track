const connection = require('../../config/connection');

const updatePaymentPermission = ({ permissionToString: permission, id }) => {
  const sql = {
    text: 'UPDATE users SET payment_permission = COALESCE($1,payment_permission) WHERE id=$2;',
    values: [permission, id],
  };
  return connection.query(sql);
};

module.exports = updatePaymentPermission;
