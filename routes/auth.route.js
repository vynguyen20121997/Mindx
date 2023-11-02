import { Router } from "express";
import AuthController from "../controller/auth.controler.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import AuthValidator, {
  validateMdw,
} from "../middlewares/validate.middleware.js";

const router = Router();

router.post(
  "/login",
  validateMdw(AuthValidator.loginShema),
  AuthController.loginControler
);
router.post(
  "/register",
  validateMdw(AuthValidator.registerSchema),
  AuthController.registerController
);
router.get("/current-user", authMiddleware, AuthController.fetchCurrentUser);

export default router;
