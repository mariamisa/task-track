const { updateUserPermission } = require('../../database/queries');
const { boomify } = require('../../utils');

const signupController = async (req, res, next) => {
  try {
    const { edit } = req.user.permission;
    const { id } = req.params;
    const { permission } = req.body;

    if (!edit) {
      throw boomify(401, 'you dont have permission to update users!');
    }
    const permissionToString = Array(permission);
    await updateUserPermission({
      id,
      permissionToString,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'user permission updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signupController;
