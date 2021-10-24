const connection = require('../../config/connection');

const updateCommentPermission = ({ permissionToString: permission, id }) => {
  const sql = {
    text: 'UPDATE users SET comment_permission = COALESCE($1,comment_permission) WHERE id=$2;',
    values: [permission, id],
  };
  return connection.query(sql);
};

module.exports = updateCommentPermission;
