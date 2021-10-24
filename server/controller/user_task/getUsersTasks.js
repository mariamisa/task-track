const { getUsersTasksQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const getUsersTasks = async (req, res, next) => {
  try {
    const { view } = req.permission;
    if (!view) {
      throw boomify(401, 'you dont have permission to view all users tasks!');
    }
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
