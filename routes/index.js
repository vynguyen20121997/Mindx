import { Router } from "express";
import router from "./auth.route.js";
import postRoute from "./users.getpost.js";
const rootRoute = Router();

rootRoute.use("/user", router);
rootRoute.use("", postRoute);

export default rootRoute;
