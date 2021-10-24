const { deleteVisit: deleteVisitQuery, getVisitById } = require('../../database/queries');
const { boomify } = require('../../utils');

const deleteVisit = async (req, res, next) => {
  try {
    const { id: visitId } = req.params;
    const { id: userId } = req.user;

    const { rows: [visitData] } = await getVisitById({ userId, visitId });
    if (userId !== (visitData ? visitData.user_id : -8)) {
      throw (boomify(401, 'you dont have permission to delete this visit'));
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
