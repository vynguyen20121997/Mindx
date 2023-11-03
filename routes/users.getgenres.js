import { Router } from "express";
import databaseService from "../services/database.service.js";
const movieRoute = Router();

movieRoute.get("/genres", async (req, res) => {
  const genres = await databaseService.genres.find({}).toArray();
  res.json(genres);
});
export default movieRoute;
