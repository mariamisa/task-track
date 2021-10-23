const { updateUserInfo } = require('../../database/queries');
const { boomify } = require('../../utils');

const updateUser = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { id } = req.params;
    const { edit } = req.permission;
    const { username, jobTitle } = req.body;
    if (userId !== +id && !edit) {
      throw (boomify(401, 'you dont have permission to update user info'));
    }
    await updateUserInfo({ username, jobTitle, id });
    res.status(200).json({
      statusCode: 200,
      message: 'user info updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUser;
