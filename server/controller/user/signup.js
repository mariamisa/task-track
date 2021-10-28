const { hash } = require('bcrypt');

const { getUserByMobile, createNewUser } = require('../../database/queries');

const { boomify } = require('../../utils');

const signupController = async (req, res, next) => {
  try {
    const { mobile, password, username } = req.body;

    const { rows } = await getUserByMobile({ mobile });
    const [checkedUser] = rows;
    if (checkedUser) {
      throw boomify(409, 'User already exist.');
    }

    const hashedPassword = await hash(password, 10);

    await createNewUser({
      ...req.body,
      avatar: `https://avatar.oxro.io/avatar.svg?name=${username[0]}`,
      password: hashedPassword,
    });

    res.status(201).json({
      statusCode: 201,
      message: 'user created successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signupController;
