const { addNewPayment } = require('../../database/queries');
const { boomify } = require('../../utils');

const addPayment = async (req, res, next) => {
  try {
    const { add } = req.permission;
    if (!add) {
      throw boomify(401, 'you dont have permission to add payment!');
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
