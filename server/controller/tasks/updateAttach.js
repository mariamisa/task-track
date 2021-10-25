const { addFilesToCloudenary, toJson, boomify } = require('../../utils');
const { updateTaskAttach } = require('../../database/queries');

const updateAttachController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { edit } = req.permission;

    if (!edit) {
      throw boomify(401, 'you dont have permission to update task info!');
    }
    if (req.files && req.files.attach) {
      const { attach } = req.files;
      const urls = await addFilesToCloudenary(attach);
      await updateTaskAttach({ urls: toJson(urls), id });
      res.json({
        statusCode: 200,
        message: 'attach added successfully',
      });
    } else {
      throw boomify(400, 'uploading fail/attach is required field');
    }
  } catch (err) {
    if (err.message === 'upload attach error') {
      res.status(500).json({
        status: 500,
        message: "couldn't upload attach",
      });
    } else {
      next(err);
    }
  }
};

module.exports = updateAttachController;
