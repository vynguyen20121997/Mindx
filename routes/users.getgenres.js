import { Router } from "express";
import databaseService from "../services/database.service.js";
const genreRoute = Router();

genreRoute.get("/genres", async (req, res) => {
  const genres = await databaseService.genres.find({}).toArray();
  res.json(genres);
});
export default genreRoute;
