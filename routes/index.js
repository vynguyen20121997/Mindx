import { Router } from "express";
import router from "./auth.route.js";
import movieRoute from "./users.getmovies.js/index.js";
import genreRoute from "./users.getmovies.js";
const rootRoute = Router();

rootRoute.use("/user", router);
rootRoute.use("", movieRoute);
rootRoute.use("", genreRoute);

export default rootRoute;
