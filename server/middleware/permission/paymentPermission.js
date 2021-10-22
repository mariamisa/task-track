const { getUserPermission } = require('../../database/queries');
const getPermissionQuery = require('../../utils/queryPermissionGenerate');
const { toObject } = require('../../utils');

const paymentPermission = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserPermission(getPermissionQuery('payment_permission', id));
    req.permission = toObject(rows[0].payment_permission);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = paymentPermission;
