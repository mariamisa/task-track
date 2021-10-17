const { deleteTaskQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const deleteTask = async (req, res, next) => {
  try {
    const { delete: deleteTaskP } = req.user.permission;
    const { id } = req.params;
    if (!deleteTaskP) {
      throw boomify(401, 'you dont have permission to update users!');
    }
    await deleteTaskQuery(id);
    res.status(200).json({
      statusCode: 200,
      msg: 'task deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteTask;
