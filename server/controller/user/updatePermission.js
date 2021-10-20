const {
  updateUserPermission: updateUserPermissionQuery,
  updateTaskPermission,
  updateVisitPermission,
  updateSittingPermission,
  updatePaymentPermission,
} = require('../../database/queries');
const { boomify } = require('../../utils');

const updateUserPermission = async (req, res, next) => {
  try {
    const { edit } = req.permission;
    const { id, permissionType } = req.params;
    const { permissionValue } = req.body;

    if (!edit) {
      throw boomify(401, 'you dont have permission to update users!');
    }
    const permissionToString = Array(permissionValue);
    switch (permissionType) {
      case 'user':
        await updateUserPermissionQuery({ permissionToString, id });
        break;
      case 'task':
        await updateTaskPermission({ permissionToString, id });
        break;
      case 'visit':
        await updateVisitPermission({ permissionToString, id });
        break;
      case 'sitting':
        await updateSittingPermission({ permissionToString, id });
        break;
      case 'payment':
        await updatePaymentPermission({ permissionToString, id });
        break;
      default:
    }

    res.status(200).json({
      statusCode: 200,
      message: 'user permission updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUserPermission;
