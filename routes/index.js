import { Router } from "express";
import router from "./auth.route.js";
import movieRoute from "./users.getmovies.js";
import genreRoute from "./users.getgenres.js";
const rootRoute = Router();

rootRoute.use("/user", router);
rootRoute.use("", movieRoute);
rootRoute.use("", genreRoute);

export default rootRoute;
