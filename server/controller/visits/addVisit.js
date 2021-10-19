const { addNewVisit } = require('../../database/queries');
const { boomify } = require('../../utils');

const addVisit = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const {
      date, fromCountry, toCountry, location, kmNumber, status,
    } = req.body;
    await addNewVisit({
      userId, date, fromCountry, toCountry, location, kmNumber, status,
    });
    res.status(200).json({
      statusCode: 200,
      msg: 'visit added successfully',
    });
  } catch (error) {
    if (error.constraint === 'uc_user_visit') {
      next(boomify(400, 'you already add this visits'));
    }
    next(error);
  }
};

module.exports = addVisit;
