const {
  updateUserPermission: updateUserPermissionQuery,
  updateTaskPermission,
  updateVisitPermission,
  updateSettingPermission,
  updatePaymentPermission,
  updateCommentPermission,
  addSettingQuery,
  deleteSettingQuery,
} = require('../../database/queries');
const { boomify, toObject } = require('../../utils');

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
      case 'setting': {
        const {
          rows: [permissionUser],
        } = await updateSettingPermission({ permissionToString, id });
        const settingPermissionToObject = toObject(permissionUser.setting_permission);
        if (settingPermissionToObject.edit) {
          await addSettingQuery(id);
        } else {
          await deleteSettingQuery(id);
        }
        break;
      }
      case 'payment':
        await updatePaymentPermission({ permissionToString, id });
        break;
      case 'comment':
        await updateCommentPermission({ permissionToString, id });
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
