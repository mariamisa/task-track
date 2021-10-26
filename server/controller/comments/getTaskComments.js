const { getCommentsByTaskId } = require('../../database/queries');

const getTaskComments = async (req, res, next) => {
  try {
    const { taskId } = req.params;

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
