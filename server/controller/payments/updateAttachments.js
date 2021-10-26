const { addFilesToCloudenary, toJson, boomify } = require('../../utils');
const { updateAttachmentsPaymentQ } = require('../../database/queries');

const updateAttachments = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { edit } = req.permission;

    if (!edit) {
      throw boomify(401, 'you dont have permission to update task!');
    }
    if (req.files && req.files.attachments && req.files.attachments.length > 0) {
      const { attachments } = req.files;
      const urls = await addFilesToCloudenary(attachments);
      await updateAttachmentsPaymentQ({ urls: toJson(urls), id });

      res.json({
        statusCode: 200,
        message: 'attachments added successfully',
      });
    } else {
      throw boomify(400, 'uploading fail/attachments is required field || upload more than one file');
    }
  } catch (err) {
    if (err.message === 'upload attachments error') {
      res.status(500).json({
        status: 500,
        message: "couldn't upload attachments",
      });
    } else {
      next(err);
    }
  }
};

module.exports = updateAttachments;
