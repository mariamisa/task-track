const { addNewTask } = require('../../database/queries');
const { boomify } = require('../../utils');

const addTask = async (req, res, next) => {
  try {
    const { add } = req.permission;
    if (!add) {
      throw boomify(401, 'you dont have permission to add task!');
    }
    await addNewTask({ ...req.body });
    res.status(200).json({
      statusCode: 200,
      msg: 'task added successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addTask;
