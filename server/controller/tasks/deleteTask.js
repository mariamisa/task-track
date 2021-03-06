const { deleteTaskQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const deleteTask = async (req, res, next) => {
  try {
    const { delete: deleteTaskP } = req.permission;
    const { id } = req.params;
    if (!deleteTaskP) {
      throw boomify(401, 'you dont have permission to delete tasks!');
    }
    await deleteTaskQuery(id);
    res.status(200).json({
      statusCode: 200,
      message: 'task deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteTask;
