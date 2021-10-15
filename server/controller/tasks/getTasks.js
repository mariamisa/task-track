const { getAllTasks } = require('../../database/queries');

const getTasks = async (req, res, next) => {
  try {
    const { rows } = await getAllTasks();
    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getTasks;
