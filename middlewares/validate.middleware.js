const validateMdw = (schema) => (req, res, next) => {
  try {
  } catch (error) {}
};
const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
