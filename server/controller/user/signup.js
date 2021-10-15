const { hash } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const { getUserByMobile, createNewUser } = require('../../database/queries');

const { promiseJWT, boomify } = require('../../utils');

const signupController = async (req, res, next) => {
  try {
    const { mobile, password, username } = req.body;
    const { rows } = await getUserByMobile({ mobile });
    const [checkedUser] = rows;
    if (checkedUser) {
      throw boomify(409, 'User already exist.');
    }

    const hashedPassword = await hash(password, 10);

    const { rows: newUserData } = await createNewUser({
      ...req.body,
      avatar: `https://avatar.oxro.io/avatar.svg?name=${username[0]}`,
      password: hashedPassword,
    });
    const { id, permission } = newUserData[0];
    const permissionObject = JSON.parse(permission[0]);
    const token = await promiseJWT(sign, {
      id,
      username,
      permissionObject,
    });
    res.status(201).cookie('token', token).json({
      statusCode: 201,
      message: 'Signed up successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signupController;
