const getPermissionQuery = (permissionName, id) => `SELECT ${permissionName} FROM users WHERE id=${id}`;

module.exports = getPermissionQuery;
