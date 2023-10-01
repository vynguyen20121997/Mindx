import { Router } from "express";
import userRoute from "./users.routes.js";
import postRoute from "./users.getpost.js";
const rootRoute = Router();

rootRoute.use("/users", userRoute);
rootRoute.use("/users", postRoute);

export default rootRoute;
