const { deleteUserById } = require('../../database/queries');
const { boomify } = require('../../utils');

const deleteUser = async (req, res, next) => {
  try {
    const { delete: deleteUserP } = req.permission;
    const { id } = req.params;
    if (!deleteUserP) {
      throw boomify(401, 'you dont have permission to delete users!');
    }
    await deleteUserById(id);
    res.status(200).json({
      statusCode: 200,
      message: 'user deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteUser;
