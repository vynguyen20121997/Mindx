import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

const loginShema = Yup.object().shape({
  email: Yup.string().email().required(),
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
