import * as yup from "yup";

const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const loginShema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const AuthValidator = {
  registerSchema,
  loginShema,
};
export default AuthValidator;

export const validateMdw = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
