const { getUserPermission } = require('../../database/queries');
const getPermissionQuery = require('../../utils/queryPermissionGenerate');
const { toObject } = require('../../utils');

const commentPermission = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserPermission(getPermissionQuery('comment_permission', id));
    req.permission = toObject(rows[0].comment_permission);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = commentPermission;
