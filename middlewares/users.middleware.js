import databaseService from "../services/database.service.js";

export const loginValidator = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await databaseService.Users.findOne({ email, password });

  if (!user) {
    throw new Error("email voi pass sai roi kia");
  }
  req.user = user;
  next();
};
export const registerValidator = async (req, res, next) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    throw new Error("Nhap thieu");
  } else {
    throw new Error("bi gi roi");
  }
  next();
};
