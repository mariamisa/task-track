const { getTaskById } = require('../../database/queries');

const getTask = async (req, res, next) => {
  try {
    const { id: taskId } = req.params;

    const { rows } = await getTaskById(taskId);

    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getTask;
