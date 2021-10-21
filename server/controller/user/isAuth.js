const { getUserById } = require('../../database/queries');

const isAuthController = async (req, res, next) => {
  const { id: userId } = req.user;
  try {
    const { rows } = await getUserById(userId);

    const [
      {
        id,
        username,
        mobile,
        country,
        avatar,
        jobTitle,
        user_permission: userPermission,
        task_permission: taskPermission,
        visit_permission: visitPermission,
        sitting_permission: sittingPermission,
        payment_permission: paymentPermission,
        comment_permission: commentPermission,
      },
    ] = rows;

    return res.json({
      statusCode: 200,
      data: {
        id,
        username,
        country,
        avatar,
        mobile,
        jobTitle,
        userPermission,
        taskPermission,
        visitPermission,
        sittingPermission,
        paymentPermission,
        commentPermission,
      },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = isAuthController;
