const { updateVisitQuery } = require('../../database/queries');

const updateVisit = async (req, res, next) => {
  try {
    const { id: visitId } = req.params;
    const { id: userId } = req.user;
    const {
      date, fromCountry, toCountry, location, kmNumber, status,
    } = req.body;

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
