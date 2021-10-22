const { updateUserTaskQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const updateUserTask = async (req, res, next) => {
  try {
    const { edit } = req.permission;
    const { id: taskId } = req.params;
    const { id: userId } = req.user;
    const {
      date, deadline, visibility, status,
    } = req.body;

    if (!edit) {
      throw boomify(401, 'you dont have permission to update this task!');
    }
    await updateUserTaskQuery({
      taskId,
      userId,
      date,
      deadline,
      visibility,
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
