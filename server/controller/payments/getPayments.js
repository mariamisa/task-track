const { getAllPayment } = require('../../database/queries');
const { boomify } = require('../../utils');

const getPayments = async (req, res, next) => {
  try {
    const { view } = req.permission;
    if (!view) {
      throw boomify(401, 'you dont have permission to view Payments!');
    }
    const { rows } = await getAllPayment();
    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getPayments;
