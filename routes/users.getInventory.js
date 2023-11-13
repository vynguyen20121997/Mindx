import { Router } from "express";
import databaseService from "../services/database.service.js";
const inventoryRoute = Router();

inventoryRoute.get("/inventory", async (req, res) => {
  const genres = await databaseService.Inventory.find({}).toArray();
  res.json(genres);
});
export default inventoryRoute;
