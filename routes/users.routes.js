import { Router } from "express";
import { signToken } from "../component/services.js";
import { uuid } from "uuidv4";
import { loginController } from "../controller/loginControler.js";
import { wrapRequestHandler } from "../component/handlers.js";
import {
  loginValidator,
  registerValidator,
} from "../middlewares/users.middleware.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import databaseService from "../services/database.service.js";
import { registerController } from "../controller/registerControler.js";

const userRoute = Router();

// const login = asyncHandler(async (req, res) => {
//   const { email, password } = req.body || {};

//   // 2. Check email
//   const existingUser = await databaseService.users.findOne({ email });
//   if (!existingUser) {
//     res.status(400);
//     throw new Error("Invalid credentials");
//   }

//   // 3. Check password
//   const isMatchedPassword = await bcrypt.compare(
//     password,
//     existingUser.password
//   );

//   if (!isMatchedPassword) {
//     res.status(400);
//     throw new Error("Email or password is not valid");
//   }

//   // 4. Phát hành 1 tấm vé (accessToken) bằng JSON Web Token
//   const payload = {
//     id: existingUser._id,
//     email: existingUser.email,
//     fullname: existingUser.fullname,
//   };

//   const SECRET_KEY = process.env.LOGIN_SECRECT_KEY;

//   const token = jwt.sign(payload, SECRET_KEY, {
//     expiresIn: 50000,
//   });

//   //  5. Response
//   res.json({
//     message: "Login successfully",
//     accessToken: token,
//   });
// });

userRoute.post("/login", loginValidator, wrapRequestHandler(loginController));

userRoute.post(
  "/register",
  registerValidator,
  wrapRequestHandler(registerController)
);

userRoute.post("/curent");

export default userRoute;
