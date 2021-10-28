const { addUserTaskQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const addUserTask = async (req, res, next) => {
  try {
    const { add } = req.permission;
    const { taskId, userId } = req.params;
    const { id } = req.user;

    if (!add && id !== userId) {
      throw boomify(401, 'you dont have permission to add this task to another one');
    }
    const {
      status,
    } = req.body;
    await addUserTaskQuery({
      taskId,
      userId,
      status,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'task added successfully for this user',
    });
  } catch (error) {
    if (error.constraint === 'uc_user_task') {
      next(boomify(400, 'you already add this task'));
    }
    next(error);
  }
};

module.exports = addUserTask;
