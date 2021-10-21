const { getCommentsByTaskId } = require('../../database/queries');
const { boomify } = require('../../utils');

const getTaskComments = async (req, res, next) => {
  try {
    const { view } = req.permission;
    const { id: taskId } = req.params;

    if (!view) {
      throw boomify(401, 'you dont have permission to view Comments');
    }
    const { rows } = await getCommentsByTaskId(taskId);
    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getTaskComments;
