const { getUserPermission } = require('../../database/queries');
const getPermissionQuery = require('../../utils/queryPermissionGenerate');

const paymentPermission = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserPermission(getPermissionQuery('payment_permission', id));
    req.permission = JSON.parse(rows[0].payment_permission);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = paymentPermission;
