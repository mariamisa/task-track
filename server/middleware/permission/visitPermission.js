const { getUserPermission } = require('../../database/queries');
const getPermissionQuery = require('../../utils/queryPermissionGenerate');

const visitPermission = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserPermission(getPermissionQuery('visit_permission', id));
    req.permission = JSON.parse(rows[0].visit_permission);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = visitPermission;
