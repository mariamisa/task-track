const { getUserPermission } = require('../../database/queries');
const getPermissionQuery = require('../../utils/queryPermissionGenerate');
const { toObject } = require('../../utils');

const taskPermission = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserPermission(getPermissionQuery('task_permission', id));
    req.permission = toObject(rows[0].task_permission);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = taskPermission;
