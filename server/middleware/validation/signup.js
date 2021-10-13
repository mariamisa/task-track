const { object, string, ref } = require('yup');

const { boomify } = require('../../utils');

const signupValidation = async (req, res, next) => {
  try {
    const signupSchema = object().shape({
      username: string()
        .matches(/^[A-Za-z]([-']?[A-Za-z]+)*( [A-Za-z]([-']?[A-Za-z]+)*)+$/, {
          message:
            'The name must contained from two parts first name and last name.',
        })
        .required(),
      password: string()
        .min(8, 'Password must be at least 8 char')
        .required('Password is required'),

      passwordConfirmation: string()
        .required()
        .oneOf([ref('password'), null], 'Passwords must match'),
      mobile: string().min(9).required(),
      country: string(),
    });

    await signupSchema.validate(req.body, {
      abortEarly: false,
    });
    next();
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};

module.exports = signupValidation;
