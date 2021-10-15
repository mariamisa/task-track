const { addNewTask } = require('../../database/queries');

const addTask = async (req, res, next) => {
  try {
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
