const { getUserPermission } = require('../../database/queries');
const getPermissionQuery = require('../../utils/queryPermissionGenerate');

const userPermission = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserPermission(getPermissionQuery('user_permission', id));
    req.permission = JSON.parse(rows[0].user_permission);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = userPermission;
