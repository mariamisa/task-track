const { updateUserTaskQuery } = require('../../database/queries');

const updateUserTask = async (req, res, next) => {
  try {
    const { taskId, userId } = req.params;
    const {
      status,
    } = req.body;
    await updateUserTaskQuery({
      taskId,
      userId,
      status,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'task updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUserTask;
