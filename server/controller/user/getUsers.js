const { selectAllUsers } = require('../../database/queries');
const { boomify } = require('../../utils');

const getUsers = async (req, res, next) => {
  try {
    const { view } = req.permission;
    const { id: userId } = req.user;
    if (!view) {
      throw boomify(401, 'you dont have permission to view users!');
    }
    const { rows } = await selectAllUsers(userId);
    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUsers;
