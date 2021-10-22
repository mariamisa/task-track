const { hash } = require('bcrypt');
// const { sign } = require('jsonwebtoken');

const { getUserByMobile, createNewUser } = require('../../database/queries');

const { boomify } = require('../../utils');

const signupController = async (req, res, next) => {
  try {
    const { add } = req.permission;
    const { mobile, password, username } = req.body;

    if (!add) {
      throw boomify(401, 'you dont have permission to add users!');
    }
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
      message: 'user create successfully',
    });
    // const { id } = newUserData[0];
    // const token = await promiseJWT(sign, {
    //   id,
    //   username,
    // });

    // res.status(201).cookie('token', token).json({
    //   statusCode: 201,
    //   message: 'Signed up successfully',
    // });
  } catch (error) {
    next(error);
  }
};

module.exports = signupController;
