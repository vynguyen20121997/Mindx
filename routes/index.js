import { Router } from "express";
import router from "./auth.route.js";
import inventoryRoute from "./users.getInventory.js";
const rootRoute = Router();

rootRoute.use("/user", router);
rootRoute.use("", inventoryRoute);

export default rootRoute;
