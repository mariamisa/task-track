const { updatePaymentQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const updatePayment = async (req, res, next) => {
  try {
    const { edit } = req.permission;
    const { id } = req.params;
    const {
      amount, attachments, month,
    } = req.body;

    if (!edit) {
      throw boomify(401, 'you dont have permission to update Payment!');
    }
    await updatePaymentQuery({
      id,
      amount,
      attachments,
      month,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Payment updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updatePayment;
