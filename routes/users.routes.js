import { Router } from "express";
import { signToken } from "../component/services.js";
import { uuid } from "uuidv4";
const userRoute = Router();

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const payload = {
    id: uuid(),
    email,
  };
  const accessToken = await signToken({
    payload,
    privateKey: process.env.LOGIN_SECRECT_KEY,
  });
  return res.status(200).json({
    accessToken,
  });
});

export default userRoute;
