const { getUserPermission } = require('../../database/queries');
const getPermissionQuery = require('../../utils/queryPermissionGenerate');

const commentPermission = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserPermission(getPermissionQuery('comment_permission', id));
    req.permission = JSON.parse(rows[0].comment_permission);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = commentPermission;
