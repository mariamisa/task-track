const { updateComment: updateCommentQuery, getCommentById } = require('../../database/queries');
const { boomify } = require('../../utils');

const updateComment = async (req, res, next) => {
  try {
    const { edit } = req.permission;
    const { commentId } = req.params;
    const { id: userId } = req.user;
    const { comment } = req.body;

    const { rows } = await getCommentById(commentId);
    const [{ user_id: commentOwner }] = rows;

    if (!edit && commentOwner !== userId) {
      throw boomify(401, 'you dont have permission to update comments');
    }

    await updateCommentQuery({
      comment,
      commentId,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'comment updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateComment;
