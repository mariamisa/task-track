const { getUserById } = require('../../database/queries');
const { boomify } = require('../../utils');

const getUsers = async (req, res, next) => {
  try {
    const { view } = req.permission;
    const { id: userId } = req.params;
    if (!view) {
      throw boomify(401, 'you dont have permission to view users!');
    }
    const { rows: [userData] } = await getUserById(userId);
    delete userData.password;

    res.status(200).json({
      statusCode: 200,
      data: userData,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUsers;
