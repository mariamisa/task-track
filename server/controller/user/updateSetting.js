const { updateSettingQuery } = require('../../database/queries');
const { boomify } = require('../../utils');

const updateSetting = async (req, res, next) => {
  try {
    const { edit } = req.permission;
    const { id: userID } = req.user;
    const { kmCost, notificationToSend } = req.body;
    if (!edit) {
      throw boomify(401, 'you dont have permission to update setting!');
    }
    await updateSettingQuery({ kmCost, notificationToSend, userID });

    res.status(200).json({
      statusCode: 200,
      message: 'setting updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateSetting;
