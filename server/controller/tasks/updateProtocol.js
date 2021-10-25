const { addFilesToCloudenary, toJson, boomify } = require('../../utils');
const { updateTaskProtocol } = require('../../database/queries');

const updateProtocolController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { edit } = req.permission;

    if (!edit) {
      throw boomify(401, 'you dont have permission to update task info!');
    }
    if (req.files && req.files.protocol) {
      const { protocol } = req.files;
      const urls = await addFilesToCloudenary(protocol);
      await updateTaskProtocol({ urls: toJson(urls), id });
      res.json({
        statusCode: 200,
        message: 'protocol added successfully',
      });
    } else {
      throw boomify(400, 'uploading fail/protocol is required field');
    }
  } catch (err) {
    if (err.message === 'upload protocol error') {
      res.status(500).json({
        status: 500,
        message: "couldn't upload protocol",
      });
    } else {
      next(err);
    }
  }
};

module.exports = updateProtocolController;
