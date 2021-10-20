const { deletePaymentQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const deletePayment = async (req, res, next) => {
  try {
    const { delete: deletePaymentP } = req.permission;
    const { id } = req.params;
    if (!deletePaymentP) {
      throw boomify(401, 'you dont have permission to delete Payments!');
    }
    await deletePaymentQuery(id);
    res.status(200).json({
      statusCode: 200,
      msg: 'Payment deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deletePayment;
