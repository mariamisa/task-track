const { getUserById } = require('../../database/queries');

const isAuthController = async (req, res, next) => {
  const { id: userId } = req.user;
  try {
    const { rows } = await getUserById(userId);

    const [{
      id,
      username,
      mobile,
      country,
      avatar,
      jobTitle,
      permission,
    }] = rows;

    return res.json({
      statusCode: 200,
      data: {
        id,
        username,
        country,
        avatar,
        mobile,
        jobTitle,
        permission,
      },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = isAuthController;
