const { getUsersTasksQuery } = require('../../database/queries');

const getUsersTasks = async (req, res, next) => {
  try {
    const { rows } = await getUsersTasksQuery();
    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUsersTasks;
