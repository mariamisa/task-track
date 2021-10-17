const { getTasksByUserId } = require('../../database/queries');

const getUserTasks = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getTasksByUserId(id);
    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUserTasks;
