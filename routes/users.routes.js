import { Router } from "express";
import { signToken } from "../component/services.js";
import { uuid } from "uuidv4";
import { loginController } from "../controller/loginControler.js";
const userRoute = Router();

// userRoute.post("/register", async (req, res) => {
//   const { email, password, confirm_password } = req.body;

//   const token = await signToken({
//     payload: { id: uuid() },
//     privateKey: process.env.LOGIN_SECRECT_KEY,
//   });
//   return res.status(200).json({
//     message: "created",
//     access_token: token,
//   });
// });

userRoute.post("/login", loginController);

export default userRoute;
