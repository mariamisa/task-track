const { deleteVisit: deleteVisitQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const deleteVisit = async (req, res, next) => {
  try {
    const { id: visitId } = req.params;
    const { id: userId } = req.user;

    const { rows: [userData] } = await deleteVisitQuery({ userId, visitId });
    if (userId !== (userData ? userData.user_id : -8)) {
      throw (boomify(401, 'you dont have permission to delete this visit'));
    }
    res.status(200).json({
      statusCode: 200,
      message: 'user visit deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteVisit;
