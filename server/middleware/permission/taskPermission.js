const { getUserPermission } = require('../../database/queries');
const getPermissionQuery = require('../../utils/queryPermissionGenerate');

const taskPermission = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserPermission(getPermissionQuery('task_permission', id));
    req.permission = JSON.parse(rows[0].task_permission);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = taskPermission;
