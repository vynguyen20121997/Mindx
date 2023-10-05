import databaseService from "../services/database.service.js";
import userService from "../services/users.service.js";

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await databaseService.users.findOne({ email });
    if (!user) {
      throw new Error("ko co dau");
    }
    const { access_token } = await userService.login(user._id);
    res.json({
      message: "login successfully",
      access_token,
    });
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
  }
};
