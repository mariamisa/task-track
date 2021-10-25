const { deleteVisit: deleteVisitQuery, getVisitById } = require('../../database/queries');
const { boomify } = require('../../utils');

const deleteVisit = async (req, res, next) => {
  try {
    const { id: visitId } = req.params;
    const { id: userId } = req.user;
    const { delete: visitDeleteP } = req.permission;

    const { rows: [visitOwner] } = await getVisitById(visitId);

    if (!visitDeleteP && visitOwner.user_id !== userId) {
      throw boomify(401, 'you dont have permission to delete this visit');
    }
    await deleteVisitQuery({ userId, visitId });
    res.status(200).json({
      statusCode: 200,
      message: 'user visit deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteVisit;
