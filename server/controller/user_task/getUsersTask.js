const { getAllUsersTask } = require('../../database/queries');

const getUsersTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const { rows } = await getAllUsersTask(taskId);
    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUsersTask;
