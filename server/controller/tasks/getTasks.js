const { getAllTasks } = require('../../database/queries');
// const { boomify } = require('../../utils');

const getTasks = async (req, res, next) => {
  try {
    // const { view } = req.permission;
    // if (!view) {
    //   throw boomify(401, 'you dont have permission to view tasks!');
    // }
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
