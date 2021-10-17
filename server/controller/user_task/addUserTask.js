const { addUserTaskQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const addUserTask = async (req, res, next) => {
  try {
    const { edit } = req.user.permission;
    const { taskId } = req.params;
    const { id: userId } = req.user;
    const {
      date, deadline, visibility, status,
    } = req.body;

    if (!edit) {
      throw boomify(401, 'you dont have permission to add this task to this user!');
    }
    await addUserTaskQuery({
      taskId,
      userId,
      date,
      deadline,
      visibility,
      status,
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
