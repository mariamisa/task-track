const { addNewPayment } = require('../../database/queries');
const { boomify, addFilesToCloudenary } = require('../../utils');

const addPayment = async (req, res, next) => {
  try {
    const { add } = req.permission;
    const { amount, month } = req.body;
    if (!add) {
      throw boomify(401, 'you dont have permission to add payment!');
    }
    const paymentData = { amount, month };
    if (req.files && req.files.attachments && req.files.attachments) {
      const urls = await addFilesToCloudenary(req.file.attachments);
      paymentData.attachments = urls;
    }
    await addNewPayment({ ...req.body });
    res.status(200).json({
      statusCode: 200,
      msg: 'payment added successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addPayment;
