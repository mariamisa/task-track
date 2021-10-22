const { addComment: addCommentQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const addComment = async (req, res, next) => {
  try {
    const { add } = req.permission;
    const { taskId } = req.params;
    const { id: userId } = req.user;
    const {
      comment,
    } = req.body;

    if (!add) {
      throw boomify(401, 'you dont have permission to add comment!!');
    }
    await addCommentQuery({
      userId,
      taskId,
      comment,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'comment added successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addComment;
