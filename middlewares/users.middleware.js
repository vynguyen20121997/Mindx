import databaseService from "../services/database.service.js";

export const loginValidator = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await databaseService.users.findOne({ email, password });
  console.log("user", user);

  if (!user) {
    throw new Error("email voi pass sai roi kia");
  }
  req.user = user;
  next();
};
export const registerValidator = async (req, res, next) => {
  const { email, password, confirm_password } = req.body;
  if (!(email && password && confirm_password)) {
    throw new Error("Nhap thieu");
  }
  if (!(password === confirm_password)) {
    throw new Error("sai passs");
  }
  next();
};
