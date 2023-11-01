import { Router } from "express";
import AuthController from "../controller/auth.controler.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", AuthController.loginControler);
router.post("/register", AuthController.registerController);
router.get("/current-user", authMiddleware, AuthController.fetchCurrentUser);

export default router;
