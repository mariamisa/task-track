const { updateVisitQuery, getVisitById } = require('../../database/queries');
const { boomify } = require('../../utils');

const updateVisit = async (req, res, next) => {
  try {
    const { id: visitId } = req.params;
    const { id: userId } = req.user;
    const { edit } = req.permission;
    const {
      date, fromCountry, toCountry, location, kmNumber, status,
    } = req.body;

    const { rows: [visitOwner] } = await getVisitById(visitId);

    if (!edit && visitOwner.user_id !== userId) {
      throw boomify(401, 'you dont have permission to update this visit');
    }

    await updateVisitQuery({
      userId, visitId, date, fromCountry, toCountry, location, kmNumber, status,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'visit updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateVisit;
