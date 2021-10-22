const { getUserPermission } = require('../../database/queries');
const getPermissionQuery = require('../../utils/queryPermissionGenerate');
const { toObject } = require('../../utils');

const userPermission = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserPermission(getPermissionQuery('user_permission', id));
    req.permission = toObject(rows[0].user_permission);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = userPermission;
