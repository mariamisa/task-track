const { getUserVisits: getUVisits } = require('../../database/queries');

const getUserVisits = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { rows } = await getUVisits(userId);
    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUserVisits;
