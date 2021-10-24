const { getAllVisits } = require('../../database/queries');
const { boomify } = require('../../utils');

const getVisits = async (req, res, next) => {
  try {
    const { view } = req.permission;
    if (!view) {
      throw boomify(401, 'you dont have permission to delete comments');
    }
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
