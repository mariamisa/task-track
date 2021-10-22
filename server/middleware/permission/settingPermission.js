const { getUserPermission } = require('../../database/queries');
const getPermissionQuery = require('../../utils/queryPermissionGenerate');
const { toObject } = require('../../utils');

const settingPermission = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserPermission(getPermissionQuery('setting_permission', id));
    req.permission = toObject(rows[0].setting_permission);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = settingPermission;
