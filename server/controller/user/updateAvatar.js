const { uploadCloudinary, boomify } = require('../../utils');

const { updateAvatarImage } = require('../../database/queries');

const updateAvatar = async (req, res, next) => {
  try {
    const { id } = req.user;
    if (req.files && req.files.avatar) {
      const { avatar } = req.files;
      if (avatar.type.includes('image/')) {
        const { url } = await uploadCloudinary(avatar.path);
        await updateAvatarImage({ url, id });

        res.json({
          statusCode: 200,
          message: 'avatar added successfully',
        });
      } else {
        throw boomify(400, 'choose image only');
      }
    } else {
      throw boomify(400, 'uploading fail/avatar is required field');
    }
  } catch (err) {
    if (err.message === 'upload image error') {
      res.status(500).json({
        status: 500,
        message: "couldn't upload image",
      });
    } else {
      next(err);
    }
  }
};

module.exports = updateAvatar;
