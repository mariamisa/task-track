const { getAllVisits } = require('../../database/queries');

const getVisits = async (req, res, next) => {
  try {
    const { rows } = await getAllVisits();
    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getVisits;
