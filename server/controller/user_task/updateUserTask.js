const { updateUserTaskQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const updateUserTask = async (req, res, next) => {
  try {
    const { taskId, userId } = req.params;
    const { edit } = req.permission;

    if (!edit && +userId !== req.user.id) {
      throw boomify(401, 'you dont have permission to update user task!');
    }
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
