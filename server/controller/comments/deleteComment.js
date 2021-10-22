const { deleteComment: deleteCommentQuery, getCommentById } = require('../../database/queries');
const { boomify } = require('../../utils');

const deleteComment = async (req, res, next) => {
  try {
    const { delete: deleteCommentP } = req.permission;
    const { id } = req.params;
    const { id: userId } = req.user;

    const { rows } = await getCommentById(id);
    const [{ user_id: commentOwner }] = rows;

    if (!deleteCommentP && commentOwner !== userId) {
      throw boomify(401, 'you dont have permission to delete comments');
    }
    await deleteCommentQuery(id);
    res.status(200).json({
      statusCode: 200,
      msg: 'comment deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteComment;
