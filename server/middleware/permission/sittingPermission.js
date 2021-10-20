const { getUserPermission } = require('../../database/queries');
const getPermissionQuery = require('../../utils/queryPermissionGenerate');

const sittingPermission = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserPermission(getPermissionQuery('sitting_permission', id));
    req.permission = JSON.parse(rows[0].sitting_permission);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = sittingPermission;
