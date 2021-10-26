const { addUserTaskQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const addUserTask = async (req, res, next) => {
  try {
    const { taskId, userId } = req.params;
    const {
      date, deadline, visibility,
    } = req.body;
    await addUserTaskQuery({
      taskId,
      userId,
      date,
      deadline,
      visibility,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'task added successfully for this user',
    });
  } catch (error) {
    if (error.constraint === 'tasks_users_user_id_key') {
      next(boomify(400, 'you already add this task'));
    }
    next(error);
  }
};

module.exports = addUserTask;
