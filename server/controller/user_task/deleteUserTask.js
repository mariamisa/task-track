const { deleteUserTaskQuery } = require('../../database/queries');
// const { boomify } = require('../../utils');

const deleteUserTask = async (req, res, next) => {
  try {
    const { userId, taskId } = req.params;
    // if (+userId !== req.user.id) {
    //   throw boomify(401, 'you dont have permission to delete user task!');
    // }
    await deleteUserTaskQuery({ userId, taskId });
    res.status(200).json({
      statusCode: 200,
      message: 'user task deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteUserTask;
