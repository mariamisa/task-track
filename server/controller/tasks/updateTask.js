const { updateTaskQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const updateTask = async (req, res, next) => {
  try {
    const { edit } = req.permission;
    const { id } = req.params;
    const {
      name, type, date, deadline, visibility, completed,
    } = req.body;

    if (!edit) {
      throw boomify(401, 'you dont have permission to update task!');
    }
    await updateTaskQuery({
      id,
      name,
      type,
      date,
      deadline,
      visibility,
      completed,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'task updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateTask;
